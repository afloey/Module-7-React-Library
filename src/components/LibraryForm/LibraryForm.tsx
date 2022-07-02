import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import {chooseName, chooseEmail, chooseTitle, chooseAuthor, chooseStyle, chooseISBN } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input'
import { Button } from '@material-ui/core'
import { server_calls } from '../../api'


interface LibraryFormProps {
    id?:string;
    data?:{}
}

interface LibraryState {
    name: string;
    email: string;
    title: string;
    author: string;
    style: string;
    isbn: string;
}

export const LibraryForm = (props:LibraryFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<LibraryState>(state => state.name);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data)
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseName(data.name))
            dispatch(chooseEmail(data.email))
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseStyle(data.style));
            dispatch(chooseISBN(data.isbn));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Contact Name</label>
                    <input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} name='email' placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="style">Style</label>
                    <Input {...register('style')} name="style" placeholder='Style'/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name="isbn" placeholder='ISBN'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}