import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut ,signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebase from "../../Pages/Authentication/firebase/Firebase.init";

initializationFirebase()


const useFirebase =()=>{

    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [firebaseError, setFirebaseError]=useState('')
    const [successMsg, setSuccessMsg]=useState('')
    const [admin, setAdmin]=useState(false);
    const auth = getAuth();
    
    ///create  new account by email ---------------
    const createAccount =(email, password, name, history)=>{
      console.log(name, email,password)
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccessMsg('congratulations!! Account successfully created')
        setFirebaseError('');
        const newUser = {email, displayName:name};
        setUser(newUser);

        //save use to the database-------------------saveduser
        savedUser(email, name, 'POST')
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
         
        }).catch((error) => {
        }); 
        history.replace('/')
      })
      .catch((error) => {
        setFirebaseError(error.message);
      })
      .finally(()=> setIsLoading(false)
      )
    }
    
    //log in email password ------------------------ 
    const passwordLogin = (email, password, history,location )=>{
      setIsLoading(true)
       signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || '/';
        history.push(redirect)
     })
        .catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false));
        
      }
    //google sign in---------------------------google
    const googleLogin =(history, location)=>{
      setIsLoading(true)
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        //saved google user to the data base-----------------------saved user
        savedUser(user.email, user.displayName, 'PUT')
        setFirebaseError('');
        const destination = location?.state?.from || '/Home';
        history.replace(destination)
      }).catch((error) => {
        setFirebaseError(error.message);
      })
      .finally(()=> setIsLoading(false))
    }
//On auth state change-------------------------state change
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
        else {
            setUser({})
        }
        setIsLoading(false)
          });
          return unsubscribe;
      },[auth]);

    //signOut------------------------------loguot
    const logOut=()=>{
      const doit = window.confirm('Are you sure You want to loged out?');
      if(doit){
        const auth = getAuth();
         signOut(auth)
         .then(() => {
         }).catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false))
      }
        
    };
    // // saved user in database---------------------//
    const savedUser=(email,displayName, method)=>{
      const user = {email, displayName};
      const url='https://blooming-basin-45530.herokuapp.com/users'
      fetch(url,{
        method:method,
        headers:{
            'content-type':'application/JSON'
         },
         body:JSON.stringify(user)
      })
      .then(res=>{

      })
    }
    //  admin --------------------------call admin
     useEffect(()=>{
       const url = `https://blooming-basin-45530.herokuapp.com/users/${user.email}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setAdmin(data.admin))
     },[user.email]);

    return{
        user,
        admin,
        createAccount,
        passwordLogin,
        logOut,
        googleLogin,
        isLoading,
        firebaseError,
        successMsg,
        setFirebaseError,
        

    }

}
export default useFirebase;