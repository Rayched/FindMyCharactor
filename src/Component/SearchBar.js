
function SearchBar(){
    return (
        <div>
            <h4>캐릭터 이름을 입력해주세요.</h4>
            <div className="NameSearchBar">
                <input type="text" placeholder="캐릭터 이름"/>
                <button>검색</button>
            </div>
        </div>
    );
}

export default SearchBar;