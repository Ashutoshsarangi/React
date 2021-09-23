
function DisplayProfile(props){
    return(
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>About</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              props.userList.map((user, index)=>{
                return(
                  <tr key={index+987686}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.about}</td>
                    <td>
                      <span onClick={()=>props.updateUser(user)}>Edit</span> / <span>Delete</span>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
    );

}

export default DisplayProfile;