import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostidPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const responce = await  PostService.getById(id);
        setPost(responce.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const responce = await  PostService.getCommentsByPostId(id);
        setComments(responce.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div><h2>{post.id}. {post.title}</h2><p>{post.body}</p></div>

            }
            <h1>Коментарии</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: '15px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>

            }
        </div>
    );
};

export default PostidPage;