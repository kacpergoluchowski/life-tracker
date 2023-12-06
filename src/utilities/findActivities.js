export default function findActivities(activitiesArray) {
    let activities = [];

    if(activitiesArray)
        activitiesArray.content.forEach(activity => {
            if(activity.type === 'habit')
                activities.push(activity.id);
        });
        
    return activities;
}