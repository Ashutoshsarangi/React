import React from 'react';

function ProfileInput(){
    return(
        <form>
        Name:- <input type="text"/>
        Email:- <input type="email"/>
        Gender:-
        <input type="radio" name="gender" id="male"/> Male
        <input type="radio" name="gender" id="female"/>Female
        About:-
        <textarea placeholder="About"></textarea>
        <input type="button" value="Add"/>
        </form>
    );
}

export default ProfileInput;