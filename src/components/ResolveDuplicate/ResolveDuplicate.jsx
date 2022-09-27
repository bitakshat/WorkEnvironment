import React, { useEffect, useState } from 'react';


const badgeStyle = "text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300 text-gray-700 rounded-full";

let selected = "bg-green-100 border-spacing-y-96";
let notSelected = "bg-red-100 line-through text-red-500";

const ResolveDuplicate = (props) => {

    const [source, setSource] = useState(props.data.errorRecords[0].records.source);

    function selectData(event) {
        setSource(event.target.value);
        console.log(source);
    }

    return (
        <React.Fragment>
            <table cellPadding={"10rem"} className='w-full border-collapse border-spacing'>
                <thead>
                    <tr className='text-left text-gray-500'>
                        <th></th>
                        <th>Source</th>
                        <th>email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>No.</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        props.data.errorRecords.map((e) => {

                            return (
                                <React.Fragment>
                                    <tr className={selected}>
                                        <td>
                                            <input type="radio" name={e.id} id={e.id} value="uploaded" onChange={selectData}/>
                                        </td>
                                        <td>
                                            <div className={badgeStyle}>{e.records[0].source}</div>
                                        </td>
                                        <td>{e.records[0].email}</td>
                                        <td>{e.records[0].firstName}</td>
                                        <td>{e.records[0].lastName}</td>
                                        <td>{e.records[0].no}</td>
                                    </tr>
                                    <tr className={'border-b-[2rem] border-white '+notSelected}>
                                        <td>
                                            <input type="radio" name={e.id} id={e.id} value="database" onChange={selectData}/>
                                        </td>
                                        <td>
                                            <div className={badgeStyle}>{e.records[1].source}</div>
                                        </td>
                                        <td>{e.records[1].email}</td>
                                        <td>{e.records[1].firstName}</td>
                                        <td>{e.records[1].lastName}</td>
                                        <td>{e.records[1].no}</td>
                                    </tr>
                                </React.Fragment>
                            )
                        })
                    }

                </tbody>
            </table>
        </React.Fragment>
    );
}

export default ResolveDuplicate;