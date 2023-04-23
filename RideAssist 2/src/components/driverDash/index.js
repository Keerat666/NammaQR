import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import MyRides from '../myRides';
import RideStats from '../rideStats';
import TripDetails from '../tripDetails';

const DriverDash = (props) => {

  const [newRide, setnewRide] = useState([]);

  const [childComponents, setChildComponents] = useState([]);


  const [todayRideCount, setTodayRideCount] = useState(0);
  const [todayRideFareSum, setTodayRideFareSum] = useState(0);



  const [rideStatus, setRideStatus] = useState(null);

  const handleRideStatus = (data) => {
    console.log("Received some data : "+data)
    setRideStatus(data);
    if(data==="ended")
    {
      updateTripDetails()
      setnewRide([])
      setRideStatus(null)
      fetchLatestTrips()
      fetchStats()
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("hello")
    const { data, nav } = props;
    nav.navigate('HomePage')

  };

  useEffect(()=>{

    fetchLatestTrips()
    fetchStats()
    fetchData()
  },[])

  fetchLatestTrips=()=>{

    const driverID = props.data._id; 
    console.log("DriverID : "+driverID)
    fetch(`https://rideassist.onrender.com/api/v1/trips/fetchTrips?driverID=${driverID}`)
      .then(response => response.json())
      .then(data => {
        // handle the data here

        console.log("Latest trips")
        let childComponentsTemp=[]
        for (let i = data.length-1; i >=0 ; i--) {

          console.log("Inside loop")
          childComponentsTemp.push(<MyRides myRides={data[i]} />);
        }
        console.log(childComponentsTemp.length)
        setChildComponents(childComponentsTemp)
       
      })
      .catch(error => {
        // handle any errors here
        console.log(error)
      });
  }

  fetchStats=()=>{

    const driverID = props.data._id; 
    console.log("DriverID : "+driverID)
    fetch(`https://rideassist.onrender.com/api/v1/trips/fetchStats?driverID=${driverID}`)
      .then(response => response.json())
      .then(data => {
        // handle the data here
        setTodayRideCount(data.count)
        setTodayRideFareSum(data.totalAmount)
        
       
      })
      .catch(error => {
        // handle any errors here
        console.log(error)
      });
  }

  updateTripDetails=()=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let data = { "trip_status": "Finished" ,"_id" : newRide[0]._id }
    console.log(data)

    var requestOptions = {
      method: 'PUT',
      body : JSON.stringify(data),
      headers: myHeaders,
      redirect: 'follow'
    };

    // make PUT request
    fetch("https://rideassist.onrender.com/api/v1/trips/edit", requestOptions)
      .then((response) =>response.json())
      .then((data) => {
          
        console.log(data)

        // if(data.UpdateStatus)
        //     alert("QR Status is now : "+status)
    
    })
      .catch((error) => console.error(error));

  }

  const fetchData = () => {

    const driverID = props.data._id; 
    console.log("DriverID : "+driverID)
    fetch(`https://rideassist.onrender.com/api/v1/drivers/newRides?driverID=${driverID}`)
      .then(response => response.json())
      .then(data => {
        // handle the data here
        setnewRide(data.trips)
      })
      .catch(error => {
        // handle any errors here
        console.log(error)
      });

  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 30000); // call fetchData() every 1 minute (60000 ms)

    return () => clearInterval(interval); // clear the interval on component unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: props.data.profile_picture }}
          style={styles.profileImage}
        />
        <Text>Hello, {props.data.full_name} 👋 </Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text> Logout</Text>
        </TouchableOpacity>
      </View>

<View style={styles.stats}>
<Text style={styles.statsHeading}>Stats for today</Text>
<RideStats rides={todayRideCount} earnings={todayRideFareSum} />

</View>

      <Text style={styles.title}>{rideStatus===null ? "Incoming Requests": "Ongoing Trip" } </Text>
        {/* Add your driver dashboard content here */}
        {newRide.length===0 && <Text style={styles.subTitle}>No new ride requests :(</Text>}
        {newRide.length>0 && <TripDetails myRides={false} rideDetails={newRide} RideStatusChange={handleRideStatus}></TripDetails>}

        <Text style={styles.title}>My Rides</Text>

      <ScrollView style={styles.content}>
        {/* Add your driver dashboard content here */}
        {/* <TripDetails myRides={true}></TripDetails> */}
        {childComponents}
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stats: {
    margin : 10
  },
  statsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#e3e3e3',
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft : 10
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft : 10
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  logoutIcon: {
    width: 20,
    height: 20,
  },
});

export default DriverDash;

