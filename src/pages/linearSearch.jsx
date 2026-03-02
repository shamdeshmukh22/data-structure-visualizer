import { useEffect, useState } from "react";

export default function LinearSearch() {
  var[size,setSize]=useState(5);
  var[search,setsearch]=useState();
  var[foundIndex,setfoundIndex]=useState(-1);
  var[currentIndex,setcurrentIndex]=useState(null);
  var[numbers,setnumber]=useState([]);
  useEffect(()=>{
     setnumber(Array(size).fill(" "));
  },[size]);

  const handleChange=(value,index)=>{
    const updated = [...numbers];
    updated[index] = value;
    setnumber(updated);
  }

  const SearchElement=(e) => {
    e.preventDefault();

    setfoundIndex(null);
    let i = 0;

    const interval = setInterval(() => {
      if (i >= numbers.length) {
        clearInterval(interval);
        setcurrentIndex(null);
        setfoundIndex(-1);
        return;
      }

      setcurrentIndex(i);

      if (Number(numbers[i]) === Number(search)) {
        setfoundIndex(i);
        clearInterval(interval);
      }

      i++;
    }, 800);
  };
  
  return (
    <>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-md-12 p-3 navbar text-white ">
            <h4>Linear Search Algorithm</h4>
          </div>
          <div className="col-md-12 mt-3 ">
            <label htmlFor="size">
              Change Size* (default size is{" "}
              <span className="text-danger font-bolder">5</span> )
            </label>
            <input
              type="number"
              defaultValue={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
              }}
              className="form-control w-50"
              name=""
              id=""
            />
          </div>
          <div className="col-md-12">
            <div className="row">
              {numbers.map((num, index) => {
                return (
                  <>
                    <div className="col-md-3 mt-3  ">
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        id=""
                        placeholder={`enter number ${index + 1}`}
                        onChange={(e) => handleChange(e.target.value, index)}
                      />
                    </div>
                  </>
                );
              })}
              <div className="col-md-12 mt-3 mb-3">
                <h5> search element</h5>
                <input
                  type="number"
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                  className="form-control float-left w-25"
                  name=""
                  id=""
                />

                <button
                  className="btn btn-primary pr-5 pl-5 ml-3"
                  onClick={SearchElement}
                >
                  search
                </button>
              </div>

              {numbers.map((num, index) => {
                return (
                  <>
                    <div className="col-md-1 ms-2 mt-2" key={index}>
                      <button
                        className={`btn w-100 ${
                          index === foundIndex
                            ? "btn-success"
                            : index === currentIndex
                              ? "btn-warning"
                              : "btn-secondary"
                        }`}
                      >
                        {num}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          
            {foundIndex >= 0 && (
              <h5 className="mt-3 ml-5 fw-bold text-success">
                Element found at index: {foundIndex}
              </h5>
            )}
              { 
                foundIndex=== -1 && (
                  <h5 className="mt-3 ml-5 fw-bold text-success">
                  Element Not Found
                </h5>
                )
              }
        </div>
      </div>
    </>
  );
}
