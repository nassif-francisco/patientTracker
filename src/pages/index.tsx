// @ts-nocheck
import { useGetUsers, useCreateNewUser, useDeleteUserByID } from '../utils/graphql/operations'
import { GET_USERS } from '../utils/graphql/operations'

const Index = () => {

  const { loading, error, data} = useGetUsers();

  const [createUser, { datauser, loadingUser, errorUser }] = useCreateNewUser();

  const [deleteUser, {}] = useDeleteUserByID();

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (loadingUser) return 'Submitting...';
  if (errorUser) return `Submission error! ${errorUser.message}`;


  const createUserData = async () => {
    await createUser({
      variables: {
      },
      refetchQueries: [
       GET_USERS,
      ],
    });
  };

  const deleteUserData = async (id) => {
    await deleteUser({
      variables: {
        id: id,
      },
      refetchQueries: [
        GET_USERS, 
      ],
    });  
  };


  return (
    <body>
      <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>List of Patients</title>

      <>
        {data.getUsers.map( l => {
          return (
            <div key = {`/users/`+l.id} className = "list-group">
              <a href={`/users/`+l.id} className="list-group-item list-group-item-action d-flex gap-1" aria-current="true">
                <img src="/customer.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
                <div className="d-flex w-100 justify-content-between">
                  <div>              
                    <h6>Patient</h6>
                    <p>{l.name} {l.lastname}</p>
                  </div>
                  <a href ='#' className="deleteAnchor" onClick={()=>{deleteUserData(l.id)}} >
                  Delete user
                  </a>
                </div>
              </a>
            </div>
          )
        })}
        <button
          className="mainButton"
          onClick={()=>{createUserData()}}
          >
          Create new User!
        </button>
      </>

      </div>
    </body>
  )
}

export default Index