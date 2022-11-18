import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
          <nav className="h-14 bg-black flex items-center justify-center">
            <ul className="flex font-mono">
    
              <li className="text-white px-5 cursor-pointer">
               <Link href="/insertionsort">
                  Insertion Sort              
               </Link>
              </li>
              <li className="text-white px-5">
                <Link href="/bubblesort">
                    Bubble Sort
                </Link>
              </li>
              <li className="text-white px-5">
               <Link href="/mergesort">
                Merge Sort
               </Link> 
              </li>
              <li className="text-white px-5">
             
                Heap Sort
           
              </li>
              <li className="text-white px-5">
                Quick Sort
              </li>
              <li className="text-white px-5">
                Radix Sort
              </li>
              <Link href="/bucketsort">
                <li className="text-white px-5">
                    Bucket Sort
                </li>
              </Link>
              <li className="text-white px-5">
                Counting Sort
              </li>
            </ul>
    
          </nav>
    
    
        </>
    
      )
}
