import React, { useState, useEffect } from 'react';
import DynamicTittle from '../Hook/DynamicTittle';

const Blog = () => {
    DynamicTittle('Blog')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://galactico-server-mujahidul12628.vercel.app/blog'); // Update the path to your JSON file
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-green-600 text-center font-semibold my-5">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4 text-justify">{post.shortContent}</p>
                            <p className="text-gray-600 font-semibold text-sm">Author: {post.author}</p>
                            <p className="text-gray-600  font-semibold text-sm">Date: {post.date}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
