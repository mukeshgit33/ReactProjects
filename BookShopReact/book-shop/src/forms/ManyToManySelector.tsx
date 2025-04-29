import React from 'react';

export default function ManyToManySelector(props:ManyToManyProps) {
   function selected(item:ManyToManyModel)
   {
     const selectedItems=[...props.selected,item];
     const unSelectedItems= props.unSelected.filter(value=>value!==item);
     props.onChange(selectedItems,unSelectedItems);
   }
   function selectAll()
   {
    const selected=[...props.selected,...props.unSelected];
    const unSelected:ManyToManyModel[]=[];
    props.onChange(selected,unSelected);
   }
   function DeselectAll()
   {
    const selected:ManyToManyModel[]=[];
    const unSelected=[...props.unSelected,...props.selected];
    props.onChange(selected,unSelected);
   }
   function UnSelected(item:ManyToManyModel)
   {
    const unSelectedItems=[...props.unSelected,item];
    const selectedItems= props.selected.filter(value=>value!==item);
    props.onChange(selectedItems,unSelectedItems);
   }
    return(
    <>
    <div className="m-1">
        <label>{props.display}</label>
        <div className="Select-Multiple">
         <ul>
            {props.unSelected.map(item=>
                <li key={item.key} onClick={()=>selected(item)}>{item.value} </li>
            )}
         </ul>
         <div>
            <button type="button" onClick={selectAll}>Select All</button>
            <button type="button" onClick={DeselectAll}>DeSelect All</button>
         </div>
         <ul>
            {props.unSelected.map(item=>
                 <li key={item.key} onClick={()=>UnSelected(item)}>{item.value} </li>
            )}
         </ul>
        </div>

    </div>
    </>
   )
}
interface ManyToManyProps{
selected:ManyToManyModel[];
unSelected:ManyToManyModel[]; 
display:string;
onChange(selectedItems:ManyToManyModel[],unSelectedItems:ManyToManyModel[]):void
}
interface ManyToManyModel{
    key:number;
    value:string;
}