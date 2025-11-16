export const ProfileData = [{
  id: 'id1',
  profilePicture: {label: 'Ic', backgroundColor: 'lightPink', color: 'red'}, 
  profileName: 'Design tools',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
      
],
  profileDetails: 'For standing out. But the time is now to be okay to be the greatest you.',
  number: '30',
  participant: 'participants',
  date: '20.08.22',
  dueDate: 'Due date'
},
{
  id: 'id2',
  profilePicture: {label: 'Ps', backgroundColor: 'blue', color: 'lightBlue'},
  profileName: 'Premium Support',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'Pink is obviously a better color. Everyone born confident and everything taken away.',
  number: '23',
  participant: 'participants',
  date: '07.08.22',
  dueDate: 'Due date'
},
{
  id: 'id3',
  profilePicture: {label: 'mdi:slack', backgroundColor: 'lightPink', color: '#4A154B'},
  profileName: 'Slack Bot',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'If everything i did failed which it dosent i think that it actually succeeds.',
  number: '11',
  participant: 'participants',
  date: '10.08.22',
  dueDate: 'Due date'
},
{
  id: 'id4',
  profilePicture: {label: 'mdi:linkedin', backgroundColor: 'Blue', color: '#4635c6'}, 
  profileName: 'Developer First',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'Constantly growing. We are constantly making mistakes from which we learn and improve.',
  number: '10',
  participant: 'participants',
  date: '02.08.22',
  dueDate: 'Due date'
},
{
  id: 'id5',
  profilePicture: {label: 'Ai', backgroundColor: 'black', color: 'orange'},
  profileName: 'Looking great',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'You have the opportunity to play this game of life you need to appreciate every moment.',
  number: '30',
  participant: 'participants',
  date: '20.08.22',
  dueDate: 'Due date'
},
{
  id: 'id6',
  profilePicture: {label: 'Ps', backgroundColor: 'blue', color: 'lightBlue'},
  profileName: 'Premium support',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'Pink is obviously a better color. Everyone born confident and everything taken away.',
  number: '23',
  participant: 'participants',
  date: '07.08.22',
  dueDate: 'Due date'
},
{
  id: 'id7',
  profilePicture: {label: 'Ai', backgroundColor: 'black', color: 'orange'},
  profileName: 'Looking great',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'You have the opportunity to play this game of life you need to appreciate every moment.',
  number: '30',
  participant: 'participants',
  date: '20.08.22',
  dueDate: 'Due date'
},
{
  id: 'id8',
  profilePicture: {label: 'Ic', backgroundColor: 'lightPink', color: 'red'},
  profileName: 'Design tools',
  pictures: [
  { url: 'image1.jpg', alt: 'Image1'},
  { url: 'image2.jpg', alt: 'Image2'},
  { url: 'image3.jpg', alt: 'Image3'},
  { url: 'image4.jpg', alt: 'Image4'},
  { url: 'image5.jpg', alt: 'Image5'}
],
  profileDetails: 'For standing out. But the time is niw to be okay to be the greatest you.',
  number: '30',
  participant: 'participants',
  date: '20.08.22',
  dueDate: 'Due date'
},
]

 const getProfileData = () => {
  const data = ProfileData.slice(0, 8);
  data.push({ newProject: true });
  return data;
};




export default getProfileData;