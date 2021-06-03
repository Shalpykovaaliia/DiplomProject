import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { Indicator } from './src/components/Indicator'
import {db} from './src/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  DoctorsList,
  DoctorProfile,
  DiagnosesList,
  DiagnosDetails,
  DrugsList,
  DrugsDetails,
  PersonProfile,
  Calendar,
  Slot,
  AppointmentsList
} from './src/screens';
import {
  DoctorDashboard,
  DoctorMyProfile,
  PatientsList,
  PatientProfile,
  PatientDiagnosesList,
  PatientDiagnosDetails,
  PatientDrugsList,
  PatientDrugsDetails,
  PatientAppointmentsList
} from './src/doctorScreens'

const Stack = createStackNavigator()

export default function App() {
  const [loading,setLoading] = React.useState(true)
  const [initialRouteName,setInitialRouteName] = React.useState('StartScreen');
  // React.useEffect(()=>{
    
  //   const storage = async()=>{
  //     // try {
  //     //   await AsyncStorage.removeItem('userData');
  //     //   console.log('Data removed')
  
  //     // } catch (error) {
  //     //   console.log(error);
  //     // }
  //     let userData = await AsyncStorage.getItem('userData');
  //     userData = JSON.parse(userData)
      
  //     if (userData){
  //       console.log("appuser",userData)
  //       try{
  //         db.collection("users").doc(userData.uid).get().then((snapshot) => {
      
  //           var user = snapshot.data();
  //           console.log("firebaseuser",user)
  //           AsyncStorage.setItem('userInfo', JSON.stringify(user));
            
  //           if (user.role == 'doctor'){
  //             setInitialRouteName('DoctorDashboard')
  //             setLoading(false)
  //           }else {
  //             console.log('here')
  //             setInitialRouteName('Dashboard')
  //             setLoading(false)
              
  //           }
            
  //         }).catch((error) => {
  //             alert(error)
  //             console.error("Error: ", error);
  //             setLoading(false)
  //         });
  //       }
  //       catch (error){
  //         console.log("Error ocured: ", error)
  //         setLoading(false)
  //       }
  //     }else{
  //       setLoading(false)
  //     }
  //     // console.log(items)
  //   }
  //   storage()
    
  // },[])
  return (
    loading?
    <Indicator />
      :
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={AsyncStorage.getItem('userData')? JSON.parse(AsyncStorage.getItem('userData')).role=='patient'?'Dashboard':'DoctorDashboard':'StartScreen'}
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="PersonProfile" component={PersonProfile} />
          <Stack.Screen name="DoctorsList" component={DoctorsList} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
          <Stack.Screen name="DiagnosesList" component={DiagnosesList} />
          <Stack.Screen name="DiagnosDetails" component={DiagnosDetails} />
          <Stack.Screen name="DrugsList" component={DrugsList} />
          <Stack.Screen name="DrugsDetails" component={DrugsDetails} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Slot" component={Slot} />
          <Stack.Screen name="AppointmentsList" component={AppointmentsList} />

          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />


          {/* Doctors Screens */}
          <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
          <Stack.Screen name="DoctorMyProfile" component={DoctorMyProfile} />
          <Stack.Screen name="PatientsList" component={PatientsList} />
          <Stack.Screen name="PatientProfile" component={PatientProfile} />
          <Stack.Screen name="PatientDiagnosesList" component={PatientDiagnosesList} />
          <Stack.Screen name="PatientDiagnosDetails" component={PatientDiagnosDetails} />
          <Stack.Screen name="PatientDrugsList" component={PatientDrugsList} />
          <Stack.Screen name="PatientDrugsDetails" component={PatientDrugsDetails} />
          <Stack.Screen name="PatientAppointmentsList" component={PatientAppointmentsList} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
