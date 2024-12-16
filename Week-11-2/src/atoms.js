import {atom, selector} from 'recoil';

// export const networkAtom = atom({
//     key:"networdAtom",
//     default:102
// });

// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// });

// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// });

// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// });

// export const totalSelector =  selector({
//     key:"totalSelector",
//     get:({get})=>{
//         return get(networkAtom) + get(jobsAtom) + get(notificationAtom) + get(messagingAtom);
//     }
// })


export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get: async()=>{
            const response = await fetch("https://67604f996be7889dc35d8df0.mockapi.io/nav/nav");
            const data = await response.json();
            return data[0];
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})