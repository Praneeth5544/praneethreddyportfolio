import React from 'react'
import './myprojects.css'
//images
import review from '../../assets/review.png'
import hand_gestures from '../../assets/hand_gestures.png'
import dsse from '../../assets/dsse.jpeg'
import Vmeg from '../../assets/Vmeg.jpeg'
import Vote from '../../assets/Vote.jpeg'

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Myprojects = () => {

  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState({
    title: '',
    description: '',
    Technologies: '',
  });
  var data = [{
    "title" : "Keyword Based Entity Extraction",
    "description": 
    "I engineered an advanced system aimed at managing specialized domain datasets effectively. By designing an OWL ontology tailored to the dataset's intricacies, I ensured robust data representation and organization. Hosting this ontology on a Fuseki-server engine deployed on an AWS EC2 instance enabled seamless accessibility and scalability. Leveraging SPARQL queries as HTTP GET request headers, I facilitated dynamic entity extraction based on user-provided search text, enhancing data retrieval efficiency. Additionally, I constructed an intuitive AngularJS web application, empowering users to input keywords, execute SPARQL queries, and retrieve relevant entity triples effortlessly. This comprehensive solution fosters streamlined data management and exploration, enhancing productivity and insights within the specialized domain. My technical arsenal for this project included Python, MATLAB, MySQL, JavaScript, Amazon Web Services (EC2), and SPARQL.",
    "Technologies": "Python | MATLAB | MySQL | JS | Amazon Web Services(EC2)| SPARQL"
  },{
    "title" : "Sign Language Translation",
    "description": "I developed a machine learning application aimed at bridging communication barriers for the deaf and mute community. Leveraging Python, TensorFlow, and PyTorch, alongside OpenCV for image processing, NLTK for natural language processing, and Scikit-learn for data analysis, the application interprets sign language gestures captured via webcam with an impressive 92% accuracy rate. Transforming these gestures into text in real-time, it empowers users to express themselves fluidly, fostering inclusivity and accessibility in communication. This transformative technology heralds a new era of communication accessibility for the deaf and mute community.",
    "Technologies": "Python | TensorFlow | PyTorch |  OpenCV | NLTK (Natural Language Toolkit) | Scikit-learn | Matplotlib"
  },{
    "title" : "Domain Specific Search Engine",
    "description": 
    "I designed a sophisticated miniature search engine tailored for a news article corpus, revolutionizing information retrieval. By harnessing term frequency and inverse document frequency techniques, the system adeptly sifts through vast datasets to deliver the top 10 most relevant articles based on user queries. This powerful functionality enhances user experience by providing targeted and efficient access to pertinent news content. The technology stack driving this innovation includes Python for backend development and ReactJS for building a seamless and responsive user interface. This project signifies a significant advancement in information retrieval, facilitating streamlined access to valuable news articles for users.",
     "Technologies": "Python, ReactJS"
  },{
    "title" : "Hostel Management",
    "description": "I initiated and executed a comprehensive project dedicated to the efficient management of VMEG hostels, showcasing my proficiency in Java and Java-swing. As a critical part of this project, I architected an end-to-end framework meticulously designed to capture and organize all pertinent hostel-related information. This undertaking allowed for streamlined and organized hostel data management, making essential details easily accessible. Technologies utilized for this project included Java, Java-swing, and MySQL, demonstrating my adeptness in these tools.",
    "Technologies": "Java, Swing, MySQL"
  },{
    "title" : "Online Election Portal",
    "description": " Built a database system for storing the information of voters, contested candidates, parties and symbols. Engineered several modules related to the usage of the electoral system for quick and efficient processing.",
    "Technologies":"Java | Swing | MySQL | RDBMS | ERD —Data Modelling" 
  }];
  const handleClickOpen = (ind) => {
    setOpen(true);
    setContent(data[ind]);
  };
  const handleClose = () => {
    setOpen(false);
    setContent({
      title: '',
      description: '',
      Technologies: '',
    });
  };

  return (
    <section id='myprojects'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
      {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={ML} alt="" />
            </div>
            <h3>ML mini projects</h3>
            <small className='text-light'>Python | Data Mining | Machine Learning | Large Language Models (LLM) | Natural Language Processing (NLP) | Data Scraping | Weaviate DB | Hugging Face</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chisunku/ML" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <Button onClick={() => handleClickOpen(8)}>more details</Button>
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={scanIT} alt="" />
            </div>
            <h3>ScanIT©</h3>
            <small className='text-light'>Android Studio | Java | Firebase | Rapid APIs | OpenAI API</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chisunku/ScanIT" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.youtube.com/watch?v=sy4FiPKvGC0&t=1s" target="_blank" rel='noreferrer' className='btn'>Demo</a>
              <Button onClick={() => handleClickOpen(0)}>more details</Button>
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={pantry} alt="" />
            </div>
            <h3>SJSU pantry application </h3>
            <small className='text-light'>NodeJS | ReactJS | docker | OAuth | MongoDB | Kubernetes | AWS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chisunku/CMPE-272-well-thats-a-name" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://youtu.be/rxEEFNdfvTU" target="_blank" rel='noreferrer' className='btn'>Demo</a>
              <Button onClick={() => handleClickOpen(1)}>more details</Button>
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={foodGeeks} alt="" />
            </div>
            <h3>FoodGeeks</h3>
            <small className='text-light'>ReactJS | SpringBoot | ElasticSearch | AWS</small>
            <div className="portfolio__item-cta">
              <a href="https://youtu.be/_dsiVOeylMc" target="_blank" rel='noreferrer' className='btn'>Demo</a>
              <Button onClick={() => handleClickOpen(2)}>more details</Button>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={drop} alt="" />
            </div>
            <h3>Mini Dropbox</h3>
            <small className='text-light'>ReactJS | SpringBoot | ElasticSearch | AWS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chisunku/AWS-mini_Dropbox" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://youtu.be/xC10__KCqWY" target="_blank" rel='noreferrer' className='btn'>Demo</a>
              <Button onClick={() => handleClickOpen(3)}>more details</Button>
            </div>
            
        </article> */}
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={review} alt="" />
            </div>
            <h3>Keyword Based Entity Extraction</h3>
            <small className='text-light'>Python | MATLAB | MySQL | JS | Amazon Web Services(EC2)| SPARQL</small>
            <div className="portfolio__item-cta">
              <Button onClick={() => handleClickOpen(0)}>more details</Button>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={hand_gestures} alt="" />
            </div>
            <h3>Sign Language Translator</h3>
            <small className='text-light'>Python | TensorFlow | PyTorch |  OpenCV | NLTK (Natural Language Toolkit) | Scikit-learn | Matplotliba</small>
            <div className="portfolio__item-cta">
              <Button onClick={() => handleClickOpen(1)}>more details</Button>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={dsse} alt="" />
            </div>
            <h3>Domain Specific Search Engine</h3>
            <small className='text-light'>Python | ReactJS </small>
            <div className="portfolio__item-cta">
              <Button onClick={() => handleClickOpen(2)}>more details</Button>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Vmeg} alt="" />
            </div>
            <h3>Hostel Management</h3>
            <small className='text-light'>Java | Swing | MySQL</small>
            <div className="portfolio__item-cta">
              <Button onClick={() => handleClickOpen(3)}>more details</Button>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Vote} alt="" />
            </div>
            <h3>Online Election Portal</h3>
            <small className='text-light'>Java | Swing | MySQL | RDBMS | ERD —Data Modelling </small>
            <div className="portfolio__item-cta">
              <Button onClick={() => handleClickOpen(4)}>more details</Button>
            </div>
            
        </article>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {content['title']}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          {content['description'].split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          </Typography>
          <Typography>
            <b>Technologies:</b> {content['Technologies']}
          </Typography>
        </DialogContent>
      </BootstrapDialog>

    </section>
  )
}

export default Myprojects