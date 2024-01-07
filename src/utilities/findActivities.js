export default function findActivities(type, activitiesArray) {
    let activities = [];

    if(activitiesArray)
        activitiesArray.content.forEach(activity => {
            if(activity.type === type)
                activities.push(activity.id);
        });
        
    return activities;
}