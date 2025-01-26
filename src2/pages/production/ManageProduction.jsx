import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const ManageProduction = () => {
    const [production, setProduction]=useState([])

    const fetchProduction=()=>{
        axios.get("http://localhost/MY_PROJECT_OF_(PMS)/admin/api/production/")
        .then((res)=>{
            console.log(res);
            setProduction(res.data.production)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    useEffect(()=>{
        fetchProduction()
    },[])

    const deleteData=(id)=>{
        const isConfirm=confirm("Are you sure delete this data")
        if(isConfirm){
            axios.get("http://localhost/MY_PROJECT_OF_(PMS)/admin/api/production/delete/" + id)
            .then(res => {
              console.log(res);
              fetchSupplier()
            })
            .catch(err => {
              console.log(err);
      
            })
        }else{
            console.log("Delete operation canceled");
            
        }
      
    }

    return (
        <>
            
            <div className="container">
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr className='bg-info '>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit of Mesure</th>
                            <th>Total Cost</th>
                            <th>Status</th>
                            <th>Production Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        production?.map((data, i)=>{
                            return(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.product_id}</td>
                                <td>{data.qty}</td>
                                <td>{data.uom_id}</td>
                                <td>{data.total_cost}</td>
                                <td>{data.status_id}</td>
                                <td>{data.production_date}</td>
                                <td className='btn-group'>
                                    <NavLink to={`show/${data.id}`} className="btn btn-info">Show</NavLink>
                                    <NavLink to={`update/${data.id}`} className="btn btn-primary">Edit</NavLink>
                                    <NavLink onClick={deleteData} className="btn btn-danger">Delete</NavLink>
                                </td>
                            </tr>
                            )
                        }) 
                       }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageProduction;