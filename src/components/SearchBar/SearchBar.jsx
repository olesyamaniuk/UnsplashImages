import  { Toaster, toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchBar({onSubmit}) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target
    const searchText = form.elements.search.value;
    if (searchText.trim() === '') {
      toast.error('Please enter a search query',
      {
        icon: '🔍',
        style: {
          borderRadius: '10px',
          background: '#f77307',
          color: '#000',
          fontSize: '20px'
        },
          });
      return;
    }
    onSubmit(searchText);
       form.reset();
  }
  return (
      <header className={css.container}>
        <form className={css.mainForm} onSubmit={handleSubmit}>
        <input
            className={css.inputText}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit" className={css.btn}>Search</button>
        </form>
        <Toaster position="top-right" reverseOrder={true} />
      </header>
    );
  }