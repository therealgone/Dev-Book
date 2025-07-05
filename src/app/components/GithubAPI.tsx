/**
 * GitHub API Component
 * 
 * A GitHub profile viewer that demonstrates API integration, data fetching,
 * and dynamic content rendering. This component showcases how to interact
 * with the GitHub API to fetch user profiles and README content.
 * 
 * Features:
 * - Search GitHub users by username
 * - Display user profile information (avatar, bio, stats)
 * - Fetch and render user's README.md content
 * - Loading states and error handling
 * - Responsive design with modern UI
 * - External links to GitHub profile and website
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for managing API data and UI states
 * - Async/await for handling API requests
 * - Error handling in async operations
 * - Conditional rendering based on data availability
 * - TypeScript interfaces for data typing
 * - Fetch API for making HTTP requests
 * - Loading states and user feedback
 * - Markdown rendering with ReactMarkdown
 * 
 * @component
 * @returns {JSX.Element} GitHub profile viewer with search and data display functionality
 */
import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

/**
 * TypeScript interface for GitHub user data structure
 * Defines the shape of user data returned from GitHub API
 */
type GithubUser = {
    avatar_url: string;    // User's profile picture URL
    name: string;          // User's display name
    bio: string;           // User's bio/description
    public_repos: number;  // Number of public repositories
    html_url: string;      // GitHub profile URL
    blog: string;          // User's website/blog URL
    created_at: string;    // Account creation date
};

export default function Github() {
    // State Management for GitHub API functionality
    const [username, setUsername] = useState("");                    // Search input username
    const [userdata, setUserdata] = useState<GithubUser | null>(null); // GitHub user data
    const [loading, setLoading] = useState(false);                   // Loading state
    const [error, SetError] = useState("")                          // Error message
    const [readme, setReadme] = useState("")                        // README content

    /**
     * Fetches GitHub user data and README content
     * Makes parallel API calls to GitHub API and raw README content
     * Handles errors and updates loading states
     */
    const fetchURL = async () => {
        // Reset states for new search
        setLoading(true)
        setUserdata(null)
        SetError("")
        setReadme("")

        try {
            // Fetch README.md content from user's main repository
            const me = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
            
            // Fetch user profile data from GitHub API
            const res = await fetch(`https://api.github.com/users/${username}`);
            
            // Check if user exists
            if (!res.ok) throw new Error("NO User Found");

            // Parse user data
            const data = await res.json();
            setUserdata(data);

            // Handle README content
            if (!me.ok) {
                setReadme("");  // No README found
            } else {
                const bio = await me.text();  // Get README as text
                setReadme(bio);
            }
        }
        catch (err: any) {
            SetError(err.message)  // Set error message
        }
        finally {
            setLoading(false)  // End loading state
        }
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            {/* GitHub Title */}
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                GitHub Profile
            </h1>
            
            <div className="max-w-4xl mx-auto px-6">
                {/* Main GitHub Container */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">GitHub User Search</h2>
                    
                    {/* Search Input Section */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <input
                            type="text"
                            onChange={(e) => { setUsername(e.target.value) }}
                            placeholder="Enter GitHub username..."
                            value={username}
                            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                        />
                        <button 
                            onClick={fetchURL}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Search
                        </button>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-8">
                            <p className="text-2xl font-semibold text-[#007ACC]">Loading user data...</p>
                        </div>
                    )}
                    
                    {/* Error Display */}
                    {error && (
                        <div className="bg-red-900/20 border border-red-500 rounded-xl p-6 mb-6">
                            <p className="text-red-400 text-center text-lg font-semibold">{error}</p>
                        </div>
                    )}
                    
                    {/* User Profile Display */}
                    {userdata && (
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 mb-6">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                {/* User Avatar */}
                                <img 
                                    src={userdata.avatar_url} 
                                    alt="avatar" 
                                    className="w-24 h-24 rounded-full border-4 border-[#007ACC]"
                                />
                                {/* User Information */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">{userdata.name}</h3>
                                    <p className="text-gray-300 mb-2">{userdata.bio}</p>
                                    <p className="text-gray-400 text-sm mb-2">Member since: {new Date(userdata.created_at).toLocaleDateString()}</p>
                                    <p className="text-[#007ACC] font-semibold">Public Repos: {userdata.public_repos}</p>
                                </div>
                            </div>
                            
                            {/* External Links */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                                {/* GitHub Profile Link */}
                                <a 
                                    href={userdata.html_url} 
                                    target="_blank"
                                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                                    Visit Profile
                                </a>
                                {/* Website Link (if available) */}
                                {userdata.blog && (
                                    <a 
                                        href={userdata.blog} 
                                        target="_blank"
                                        className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                    
                    {/* README Content Display */}
                    {readme && (
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                            <h3 className="text-2xl font-bold text-[#007ACC] mb-4 text-center">README.md</h3>
                            <div className="prose prose-invert max-w-none">
                                {/* Render README markdown content */}
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                >
                                    {readme}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}