"use client"
import React from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { RiDeleteBinLine } from "react-icons/ri";
import { useStore } from '@/store/store';
import { deleteBuildById, navigateToHome } from '@/lib/actions';

const DeleteButton = () => {
    const { dispatch, current: { id } } = useStore(state => state)
    const { user } = useKindeBrowserClient()


    const onClick = async (e: React.MouseEvent) => {
        e.preventDefault()
        if (user) {
            try {
                await deleteBuildById(user.id, id)
                dispatch({ type: "SET DEFAULT" })
                alert("Build Deleted Successfully")
                navigateToHome()

            } catch (e: any) {
                alert(e.message)
            }

        }
    }

    return (
        <button onClick={(e) => onClick(e)} ><RiDeleteBinLine title="Delete Build" className='hover:text-red-500 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300' size={45} /></button>
    )
}

export default DeleteButton