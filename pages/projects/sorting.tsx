import type { NextPage,GetServerSideProps } from "next";
import styles from "../../styles/Projects.module.css"
import Mergesort from  "../../components/Mergesort"



const SortingPage: NextPage = () =>{
    return(
        <div>
            <Mergesort/>

            <p>
                It is possible to sort an array in 0(n log n) time using
                algorithms like merge sort, which is based on recursion<br/>
                Merge sort sorts a subarray [a...b] as follows:<br/>
            </p>
                <ol>
                    <li>If a = b, do not do anything, because the subarray is already sorted.</li>
                    <li>Calculate the position of the middle element: k = [(a + b)/2].</li>
                    <li>Recursively sort the subarray array[a...k].</li>
                    <li>Recursively sort the subarray array[k+1...b].</li>
                    <li>Merge the sorted subarrays array[a...k] and array[k+1...b] into a sorted subarray array[a...b].</li>
                </ol>
        </div>
    )
}

export default SortingPage;  

