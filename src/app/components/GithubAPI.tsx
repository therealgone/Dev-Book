import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

type GithubUser = {
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    html_url: string;
    blog: string;
    created_at: string;
};

export default function Github() {
    const [username, setUsername] = useState("");
    const [userdata, setUserdata] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState("")
    const [readme, setReadme] = useState("")

    const fetchURL = async () => {
        setLoading(true)
        setUserdata(null)
        SetError("")
        setReadme("")

        try {
            const me = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (!res.ok) throw new Error("NO User Found");

            const data = await res.json();
            setUserdata(data);

            if (!me.ok) {
                setReadme("");
            } else {
                const bio = await me.text();
                setReadme(bio);
            }
        }
        catch (err: any) {
            SetError(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                GitHub Profile
            </h1>
            
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">GitHub User Search</h2>
                    
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

                    {loading && (
                        <div className="text-center py-8">
                            <p className="text-2xl font-semibold text-[#007ACC]">Loading user data...</p>
                        </div>
                    )}
                    
                    {error && (
                        <div className="bg-red-900/20 border border-red-500 rounded-xl p-6 mb-6">
                            <p className="text-red-400 text-center text-lg font-semibold">{error}</p>
                        </div>
                    )}
                    
                    {userdata && (
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 mb-6">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <img 
                                    src={userdata.avatar_url} 
                                    alt="avatar" 
                                    className="w-24 h-24 rounded-full border-4 border-[#007ACC]"
                                />
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">{userdata.name}</h3>
                                    <p className="text-gray-300 mb-2">{userdata.bio}</p>
                                    <p className="text-gray-400 text-sm mb-2">Member since: {new Date(userdata.created_at).toLocaleDateString()}</p>
                                    <p className="text-[#007ACC] font-semibold">Public Repos: {userdata.public_repos}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                                <a 
                                    href={userdata.html_url} 
                                    target="_blank"
                                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                                    Visit Profile
                                </a>
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
                    
                    {readme && (
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                            <h3 className="text-2xl font-bold text-[#007ACC] mb-4 text-center">README.md</h3>
                            <div className="prose prose-invert max-w-none">
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