import  { Toaster, toast } from 'react-hot-toast';

export default function SearchBar({onSubmit}) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target
    const searchText = form.elements.search.value;
    if (searchText.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(searchText);
       form.reset();
  }
    return (
        <header>
        <form 
        onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit" >search</button>
        </form>
        <Toaster
        position="top-right"
        reverseOrder={true}/>
      </header>
    );
  }