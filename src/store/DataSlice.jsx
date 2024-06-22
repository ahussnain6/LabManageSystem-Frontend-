import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const STATUS = Object.freeze({
  IDLE :"IDLE",
  ERROR:"ERROR",
  LOADING:"LOADING"
})
const initialState = { status : STATUS.IDLE, patients:[],
  delPatient:[],users:[],signup:[],signin:[],login:null};
const DataSlice = createSlice({
    name:"Data",
   initialState
   ,
   reducers:{
    checklogin:(state)=>{
      if(localStorage.getItem("token") || localStorage.getItem("userId")){
         state.login = false;
       }else{
         state.login = true;
       }
    }
   },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPatients.pending,(state,action)=>{
            state.status = STATUS.LOADING;   
        })
        .addCase(fetchPatients.fulfilled,(state,action)=>{
          state.patients = action.payload;
         state.status = STATUS.IDLE;
        })
        .addCase(fetchPatients.rejected,(state,action)=>{
         state.status = STATUS.ERROR;
        })
        .addCase(DelPatients.pending,(state,action)=>{
          state.status = STATUS.LOADING;   
      })
      .addCase(DelPatients.fulfilled,(state,action)=>{
        state.delPatient = action.payload;
       state.status = STATUS.IDLE;
      })
      .addCase(DelPatients.rejected,(state,action)=>{
       state.status = STATUS.ERROR;
      })
      .addCase(fetchUsers.pending,(state,action)=>{
        state.status = STATUS.LOADING;   
    })
    .addCase(fetchUsers.fulfilled,(state,action)=>{
      state.users = action.payload;
     state.status = STATUS.IDLE;
    })
    .addCase(fetchUsers.rejected,(state,action)=>{
     state.status = STATUS.ERROR;
    })
  .addCase(GetSignin.pending,(state,action)=>{
    state.status = STATUS.LOADING;   
})
.addCase( GetSignin.fulfilled,(state,action)=>{
  state.signin = action.payload;
 state.status = STATUS.IDLE;
})
.addCase(GetSignin.rejected,(state,action)=>{
 state.status = STATUS.ERROR;
})
.addCase(SetPatient.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(SetPatient.fulfilled,(state,action)=>{
state.signin = action.payload;
state.status = STATUS.IDLE;
})
.addCase(SetPatient.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
  }   });
export default DataSlice.reducer;
export const {checklogin} = DataSlice.actions;
 export const fetchPatients = createAsyncThunk("patients/get",async()=>{
  const res = await axios.get("https://lab-manage-system-backend.vercel.app/patient/data");
  return res.data.data;  })
 export const DelPatients = createAsyncThunk("patients/del",async(id)=>{
  const data = await axios.delete(`https://lab-manage-system-backend.vercel.app/patient/del/${id}`);
  return JSON.stringify(data);
 });
 export const fetchUsers = createAsyncThunk("users/get",async()=>{
  const res = await axios.get("https://lab-manage-system-backend.vercel.app/user/users");
    return res.data.data; } )
export const GetSignin = createAsyncThunk("users/login",async(data)=>{
  const res = await axios.post("https://lab-manage-system-backend.vercel.app/user/login", data);
  return res;
})
export const SetPatient = createAsyncThunk("enter/patient",async(data)=>{
  const res =  await axios.post("https://lab-manage-system-backend.vercel.app/patient/entry",data);
  return res;
})  