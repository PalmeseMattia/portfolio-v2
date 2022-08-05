import React, {FC, useState} from "react";
import styles from "../styles/Projects.module.css"
import { getRandomArray } from "../utils/algorithms";


const Mergesort: FC = () =>{   
    return(
        <div>
          {getRandomArray(10,100)}
        </div>
    )
}

export default Mergesort;