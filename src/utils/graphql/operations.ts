// @ts-nocheck
import gql from 'graphql-tag'
import { useQuery, useMutation, OperationVariables } from '@apollo/client'

interface Users {
    id: string;
    name: string;
    lastname:string
}

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      lastname
    }
  }
`

export const CREATE_NEW_USER = gql`
mutation CreateNewUser {
  createNewUser {
    id
    name
    lastname
  }
}`

export const DELETE_USER_BY_ID =  gql`
mutation DeleteUserByID($id: String!) {
  deleteUserById(id: $id) {
    id
    name
    lastname
  }
}`

export const GET_USER_BY_ID = gql`
query GetUserByID($id: String!) {
  getUserById(id: $id) {
    id
    name
    lastname
  }
}`

export const MODIFY_USER_BY_ID = gql`
mutation ModifyUserByID($id: String!, $name:String!, $lastname:String!) {
  modifyUserById(id: $id, name: $name, lastname: $lastname) {
    id
    name
    lastname
  }
}`

export function useGetUsers() {
    return  useQuery<Users[]>(GET_USERS)
}

export function useDeleteUserByID() {
  return  useMutation<Users>(DELETE_USER_BY_ID)
}

export function useCreateNewUser() {
  return  useMutation<Users>(CREATE_NEW_USER)
}

export function useGetUserById(id:OperationVariables){
  return useQuery<{getUserById:Users}>(GET_USER_BY_ID, {
    variables: id ,
  });
}

export function useModifyUserByID(){
  return useMutation<Users>(MODIFY_USER_BY_ID)
}