import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({items, openModal}) {
    return (
        <div className={css.photoMainList}>
            <ul className={css.todoList}>
            {items.map((item)=>(
                <li key={item.id} className={css.listMenu}>
                    <ImageCard item ={item} openModal={openModal} />
                </li>))}
            </ul>
        </div>
    );
    
// return (
//         <div className={css.photoMainList}>
//             <ul className={css.todoList}>
//                 {items.map((item) => (
//                     <li key={item.id} className={css.listMenu}>
//                         <ImageCard item={item} openModal={openModal} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
}
