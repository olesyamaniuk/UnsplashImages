import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onLoadMore }) {
    return (
      <button className={css.btnAdd} onClick={onLoadMore}>Load more</button>
    );
}