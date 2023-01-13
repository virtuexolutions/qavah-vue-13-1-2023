import store from '@/store'

// CometChat
// COMETCHAT
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "@/constants/config";

var appSetting = new CometChat.AppSettingsBuilder()
.subscribePresenceForFriends()
.setRegion(COMETCHAT_CONSTANTS.REGION)
.build();

import {setCurrentUser} from '@/utils/index';
import {apiUrl,apiUrl1,headers} from '@/constants/config';
import axios from 'axios';
let user = JSON.parse(localStorage.getItem('user'));
if (user) {
    
        axios
          .get(`${apiUrl}/auth/user`,{headers})
          .then((res) => {
            // console.log("Main -> get profile ->  ", res);
            if (res.status === 200) {
              const profile = res.data;
              setCurrentUser(profile);
              store.dispatch('setRegisteredUser',{
               ...profile,
               phoneVerified: profile.mobile_verified,
              });
              
            } else {
              // console.log("Main -> get profile -> error!");
            }
          })
          .catch((err) => {
            console.log("Main -> get profile -> ", err);
          }); 
  
  
           CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(
            () => {
            // console.log("COMETCHAT Initialization completed successfully");
        
            
            
            CometChat.login(user.uid, COMETCHAT_CONSTANTS.AUTH_KEY).then(
              (user) => {
        
                },
                (error) => {
                // console.log('Login failed with exception:', { error });
                
                if(error.code === "ERR_UID_NOT_FOUND") {
                    
                    var newUser = new CometChat.User(user.uid);
                    newUser.setName(user.profileName);
                    newUser.setAvatar("http://127.0.0.1:8000/images/profile_images/1668087177.png");
                    newUser.setLink(`${apiUrl1}/dashboard/profile/${user.uid}`);
                    CometChat.createUser(newUser, COMETCHAT_CONSTANTS.AUTH_KEY).then(
                        user => {
                            // console.log("user created", user);
                            CometChat.login(user.uid, COMETCHAT_CONSTANTS.AUTH_KEY).then(
                              user => {
                                 console.log("Chat Login Successful:", { user });    
                            }, error => {
                                console.log("Chat Login failed with exception:", { error });    
                            }
                            );
        
                        }, error => {
                            console.log("error", error);
                        }
                    )
                } 
               }
            );
            }, error => {
            console.log("COMETCHAT Initialization failed with error:",error);
            }
        );
        // Connection Listener
        CometChat.addConnectionListener(
            user.id,
            new CometChat.ConnectionListener({
                onConnected: () => {
                    console.log("ConnectionListener => On Connected");
                    Vue.$toast.open({
                      message: `Chat Connected!`,
                      position: "top",
                    });
                },
                inConnecting: () => {
                    console.log("ConnectionListener => In connecting");
                     Vue.$toast.open({
                      message: `Establishing Chat Connection!`,
                      position: "top",
                    });
                },
                onDisconnected: () => {
                  console.log("ConnectionListener => On Disconnected");
                  Vue.$toast.open({
                    message: `Chat Disconnected!`,
                    position: "top",
                  });
                }
            })
        );
        
        // User Listener
        CometChat.addUserListener(
            user.id,
            new CometChat.UserListener({
            onUserOnline: onlineUser => {
                /* when someuser/friend comes online, user will be received here */
                // console.log("On User Online:", { onlineUser });
                // Vue.$toast.open({
                //   message: `${onlineUser} is online !`,
                //   position: "top",
                // });
            },
            onUserOffline: offlineUser => {
                /* when someuser/friend went offline, user will be received here */
                // console.log("On User Offline:", { offlineUser });
        
                // Vue.$toast.open({
                //   message: `${offlineUser} is offline !`,
                //   position: "top",
                // });
            }
            })
        );
        
        // Messages Listener
        CometChat.addMessageListener(
            user.id,
            new CometChat.MessageListener({
            onTextMessageReceived: textMessage => {
                // console.log("Text message received successfully", textMessage);
        
                // Vue.$toast.open({
                //   message: `Text message received successfully. ${textMessage}`,
                //   position: "top",
                // });
            },
            onMediaMessageReceived: mediaMessage => {
                // console.log("Media message received successfully", mediaMessage);
        
                // Vue.$toast.open({
                //   message: `Media message received successfully. ${mediaMessage}`,
                //   position: "top",
                // });
            },
            onCustomMessageReceived: customMessage => {
                // console.log("Custom message received successfully", customMessage);
        
                // Vue.$toast.open({
                //   message: `Custom message received successfully. ${customMessage}`,
                //   position: "top",
                // });
            },
            onMessagesDelivered: messageReceipt => {
                // console.log("Message Delivered", messageReceipt);
        
                // Vue.$toast.open({
                //   message: `Message Delivered. ${messageReceipt}`,
                //   position: "top",
                // });
            },
            onMessagesRead: messageReceipt => {
                // console.log("Message Read", messageReceipt);
        
                // Vue.$toast.open({
                //   message: `Message Delivered. ${messageReceipt}`,
                //   position: "top",
                // });
            },
            onTypingStarted: typingIndicator => {
                // console.log("Typing Started", typingIndicator);
        
                // Vue.$toast.open({
                //   message: `Typing Started. ${typingIndicator}`,
                //   position: "top",
                // });
            },
            onTypingEnded: typingIndicator => {
                // console.log("Typing Ended", typingIndicator);
        
                // Vue.$toast.open({
                //   message: `Typing Ended. ${typingIndicator}`,
                //   position: "top",
                // });
            },
            onMessagesDeleted: message => {
                // console.log("Message Deleted", message);
                // Vue.$toast.open({
                //   message: `Message Deleted. ${message}`,
                //   position: "top",
                // });
            },
            onMessagesEdited: message => {
                // console.log("Message Edited", message);
                // Vue.$toast.open({
                //   message: `Message Edited. ${message}`,
                //   position: "top",
                // });
            }
            })
        );
        
        // Call Listener
        CometChat.addCallListener(
            user.uid,
            new CometChat.CallListener({
            onIncomingCallReceived(call) {
                // console.log("Incoming call:", call);
                Vue.$toast.open({
                message: `Incoming call ${call}`,
                });
            },
            onOutgoingCallAccepted(call) {
                // console.log("Outgoing call accepted:", call);
                Vue.$toast.open({
                message: `Outgoing call Accepted ${call}`,
                
                });
            },
            onOutgoingCallRejected(call) {
                // console.log("Outgoing call rejected:", call);
                Vue.$toast.open({
                message: `Outgoing call Rejected ${call}`,
                
                });
            },
            onIncomingCallCancelled(call) {
                // console.log("Incoming call cancelled:", call);
                Vue.$toast.open({
                message: `Incoming call cancelled ${call}`,
                
                });
            }
            })
        );
        // if(headers.Authorization){
        //      setInterval(function () { 
        //         axios
        //         .post(`${apiUrl}/user/online`,{},{headers})
        //         .then((res) => {
        //             if (res.status === 200) {
                        
        //             } else {
        //             // console.log("Main -> get profile -> error!");
        //             }
        //         })
        //         .catch((err) => {
        //             setCurrentUser(null);
        //             store.dispatch('clearRegisteredUser');
        //             console.log('user is signed out !');
        //         }); 
        
        //     }, 5000)
        // }


}
else {
      setCurrentUser(null);
      store.dispatch('clearRegisteredUser');
      console.log('user is signed out !');
    }



