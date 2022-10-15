import React from 'react'

function Search() {
  return (
    <div className="search">
        <div className="searchform">
            <input className="searchinput"placeholder="search a user"type="text"/>
        </div>
        <div className="userchat">
            <img src="https://cdn.bollywoodmdb.com/fit-in/celebrities/500x800/photol/26-cele-img/salman-khan-69.jpg"alt=""/>
            <div className="userchatinfo">
                <span>john</span>
            </div>
        </div>
    </div>
  )
}

export default Search