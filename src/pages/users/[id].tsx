//@ts-nocheck
import { useRouter } from 'next/router'
import * as React from "react";
import { useGetUserById, useModifyUserByID } from '../../utils/graphql/operations';

const Details = () =>{
   
    const router = useRouter()
    const {id} = router.query
    let myname= 'myname';
    let mylastname = 'mylastname';

    const { loading, error, data } = useGetUserById({id});

    const [updateUser, {}] = useModifyUserByID();

    const [searchText, setSearchText] = React.useState();

    const [searchTextLastName, setSearchTextLastName] = React.useState();

    React.useEffect(()=>{
        if(!loading){
        myname = data.getUserById.name;
        mylastname = data.getUserById.lastname;
        setSearchText(myname);
        setSearchTextLastName(mylastname);
        }
    }, [loading])


    if (loading) return 'Loading...';
    if (error) return `Error! ${error}`;

    const updateUserData = async () => {
        console.log('updating!!')
        await updateUser({
          variables: {
            id: id,
            name: searchText,
            lastname: searchTextLastName
          }
        });
        setSearchText(searchText);
        setSearchTextLastName(searchTextLastName);
      };


    return(
       
        <div>
             <div className="title-input">
                <input
                className= "inputName"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                type="text"
                />

                <input
                className= "inputLastName"
                value={searchTextLastName}
                onChange={e => setSearchTextLastName(e.target.value)}
                type="text"
                />  

                <button
                className="mainButton"
                onClick={()=>updateUserData()}
                >
                Update User!
              </button>
            </div>

            Post: {data.getUserById.name} &nbsp; {data.getUserById.lastname}
            
        </div>

    )
}

export default Details;