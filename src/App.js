import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'react-icons';

import { Avatar } from 'primereact/avatar';
import { button } from 'primereact/button';

function App() {
  const data = {
    name: 'Ekwugha Clinton',
    twitter_user: 'Createen_',
    image: 'http://github.com/klinteen.png',
    bio: 'Fullstack Developer',
    links: [
      {
        name: 'Twitter',
        url: 'http://twitter.com/createen_',
      },
      {
        name: 'Zuri Team',
        url: 'https://training.zuri.team/',
      },
      {
        name: 'Zuri Books',
        url: 'http://books.zuri.team',
        description: "Find books about designs and coding",
      },
      {
        name: 'Python Books',
        url: 'https://books.zuri.team/python-for-beginners?ref_id=<Ekwugha Clinton>',
        description: "Designs and coding is out now, get yours!",
      },
      {
        name: 'Background check for coders',
        url: 'https://books.zuri.team/python-for-beginners?ref_id=<Ekwugha Clinton>',
        description: "Background check for coders never became more easy. Get yours done!",
      },
      {
        name: 'Design Books',
        url: ' https://books.zuri.team/design-rules',
        description: "Zuri offers very unique design books, want to check it out?",
      },
    ],
  };
  return (
    <div className="m-4">
      <div id='profile_img' className="flex justify-content-center align-items-center">
        <Avatar
          image={data.image}
          size="xlarge"
          shape="circle"
        />
      </div>
      <div className="flex justify-content-center align-items-center">
      <h2 id='slack' className="m-2">{data.name}</h2> 
      </div>
      <div className="flex justify-content-center align-items-center">
        <div className="flex flex-column p-2 m-2 w-screen">
          {data.links.map((link) => (
            <a href={link.url}>
              <button className="p-2 m-2 border-transparent w-full"> <p className='font-bold'> {link.name} </p>
              <p className=''> {link.description} </p>
              </button>
            </a>
          )
          )
          }
        </div>
      </div>
    </div>
  );
}



export default App;
