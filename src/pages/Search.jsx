import Navbar from "./Navbar";
export default function Searching(){
    return(
        <>
          <Navbar/>
          <div className="container-fluid alert alert-success p-4">
            <div className="row">
                <div className="col-md-12">
                    <h3>Searching Algorithms </h3>
                     <h6>
                     Searching algorithms are essential tools in computer science used to locate specific items within a collection of data. In this tutorial, we are mainly going to focus upon searching in an array. When we search an item in an array, there are two most common algorithms used based on the type of input array.</h6>
                 <ul className="ul-list-search">
                    <li>Linear Search : It is used for an unsorted array. It mainly does one by one comparison of the item to be search with array elements. It takes linear or O(n) Time.</li>
                    <li>
                        Binary Search : It is used for a sorted array. It mainly compares the array's middle element first and if the middle element is same as input, then it returns. Otherwise it searches in either left half or right half based on comparison result (Whether the mid element is smaller or greater). This algorithm is faster than linear search and takes O(Log n) time.
                    </li>
                 </ul>


                </div>
                <div className="col-md-12">
                    
                </div>
            </div>
          </div>
        </>
    )
}