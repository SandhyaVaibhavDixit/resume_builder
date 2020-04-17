import React from 'react';
import DeleteIcon from '../../_assets/icons/delete.png';
import './style.scss';

export const Table = (props) => {
    const {tableHeader, tableBody, onDelete} = props;

    const hasRows = (tableBody &&  tableBody.length !== 0)
    if(!hasRows) {
        return null;
    };

    const renderHeader = tableHeader.map(eachRow => {
      return <td key={eachRow.name}><b>{eachRow.label}</b></td>
    });

    const renderDeleteAction = (rowKey) =>{
        return(
            <button
                className="deleteButton"
                onClick={() => onDelete(rowKey)}>
                <img
                    src ={DeleteIcon}
                    alt ="Delete">
                </img>
            </button>
        )
    }

    const renderTableRows = tableBody.map(( eachRow, index) => {
        return( 
        <tr key={index}>
            {tableHeader.map(header =>{
                const { name } = header;

                return(
                    <td key={name}> {eachRow[name]} </td>
                )
             })
            }
            <td>{ renderDeleteAction(eachRow.key) }</td>
        </tr>
        )
    })
    
    return(
        <table className='table'> 
            <thead>
                <tr>
                    { renderHeader }
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {renderTableRows}
            </tbody>
        </table>
    )   
}