
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

        <div>


            <input
                type="text"
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder="Enter Your GitHub Username"
                value={username}></input>

            <button onClick={fetchURL}>Search</button>

            {loading && <p>LOADING USER</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {userdata && (
                <div>
                    <img src={userdata.avatar_url} alt="avatar" width={100} />
                    <h2>{userdata.name}</h2>
                    <p>{userdata.bio}</p>
                    <a href={userdata.blog}> Vist Website</a>
                    <p>{userdata.created_at}</p>
                    <p>Public Repos: {userdata.public_repos}</p>
                    <a href={userdata.html_url} target="_blank">Visit Profile</a>
                </div>
            )}

            {readme && (
                <div className="prose max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    >
                        {readme}
                    </ReactMarkdown>
                </div>
            )}


        </div>
    );
}