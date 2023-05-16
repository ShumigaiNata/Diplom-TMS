import SearchForm from "./SearchForm/SearchForm";
import styles from "../Header/Header.module.css"
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {InputVariants} from "../../../common/Input/interfaces";
import {useTheme} from "../../../../context/ThemeContext";
import User from "./User/User";
// import Filter from "../../../Filter/Filter";

const Header:FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        // location.search = `?search=${event.target.value}`
    }
    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        // navigate(`${Routes.search}?search=${searchQuery}`)
        setSearchQuery("")
    }
    const {isLightTheme} = useTheme()


    const [menu, setMenu] = useState<boolean>(false)
    const handleSetMenu = () => setMenu(!menu)


    return (
            <header className={`${isLightTheme ? styles.light : ""} ${styles.header}`}>
                <SearchForm onClick={() => {}} id="search" value={searchQuery} onChange={handleSearchQueryChange}
                            type="text" name="search" placeholder="Search" onSubmit={handleSearch}
                            variant={InputVariants.forSearch} filter={false}/>
                <User authorized={true} onClick={handleSetMenu} menu={menu} />
                {/*<Filter></Filter>*/}
            </header>
    );
};

export default Header;