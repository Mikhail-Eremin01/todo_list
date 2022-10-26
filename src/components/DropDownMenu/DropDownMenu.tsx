import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from './DropDownMenu.module.scss';
import { Image } from '../Image/Image';
import { useAppDispatch, useAppSelector } from "../../hook";
import { showInput } from '../../store/showInputEditTaskSlice';

function DropDownMenu() {
    const dispatch = useAppDispatch();
    const handler = () => {
        dispatch(showInput());
    }
    return (
        <div className={styles.dropDown}>
            <BsThreeDotsVertical className={styles.dropDown__threeDots}/>
            <div className = {styles.dropDownChild}>
                <div className = {styles.dropDownChild_itemContainer} onClick = {handler}>
                    <Image
                        src = 'edit.svg'
                        alt = {'Oops'}
                        className = {'dropdownChild__image'}
                        width = {16}
                        height = {16}
                    />
                    <span>Edit</span>
                </div>
                <div className = {styles.dropDownChild_itemContainer}>
                    <Image
                        src = 'trash.svg'
                        alt = {'Oops'}
                        className = {'dropdownChild__image'}
                        width = {16}
                        height = {16}
                    />
                    <span>Delete</span>
                </div>
            </div>
        </div>
    )
}

export {DropDownMenu}