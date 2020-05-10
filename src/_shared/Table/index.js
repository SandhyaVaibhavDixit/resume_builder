import React from 'react';
import DeleteIcon from '../../_assets/icons/delete.png';
import './index.scss';

export const Table = (props) => {
    const {headerRows, rows, onDelete} = props;

    const hasRows = (rows &&  rows.length !== 0)
    
    if (!hasRows) {
        return null;
    };

    const renderHeader = headerRows.map(headerRow => {
      return <td key={headerRow.name}><b>{headerRow.label}</b></td>
    });

    const renderDeleteAction = (rowKey) =>{
        return(
            <button
                className   ="delete-button"
                onClick     ={() => onDelete(rowKey)}>
                <img
                    src ={DeleteIcon}
                    alt ="Delete">
                </img>
            </button>
        )
    }

    const renderRows = rows.map(( row, index) => {
        return ( 
                <tr key={index}>
                    {headerRows.map(headerRow =>{
                        const { name } = headerRow;

                        return(
                            <td key={name}> {row[name]} </td>
                        )
                    })
                    }
                    <td>{ renderDeleteAction(row.key) }</td>
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
                { renderRows }
            </tbody>
        </table>
    )   
}