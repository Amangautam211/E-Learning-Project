/* ============================================================
   LEARNVERSE — Course Data
   30+ courses across 6 categories
   ============================================================ */

const CATEGORIES = [
  { id: 'web-dev', name: 'Web Development', icon: '💻', color: '#7c3aed' },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: '🧠', color: '#06b6d4' },
  { id: 'data-science', name: 'Data Science', icon: '📊', color: '#10b981' },
  { id: 'mobile-dev', name: 'Mobile Development', icon: '📱', color: '#ec4899' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', color: '#f59e0b' },
  { id: 'cloud', name: 'Cloud Computing', icon: '☁️', color: '#8b5cf6' }
];

const COURSES = [
  // ── Web Development ────────────────────────────
  {
    id: 'c1', title: 'Modern JavaScript Mastery', description: 'Master ES6+, async/await, closures, prototypes, and build real-world projects with modern JavaScript from scratch.',
    category: 'web-dev', difficulty: 'Beginner', duration: '8h 30m', rating: 4.8, enrolledCount: 12400,
    tags: ['javascript', 'es6', 'frontend', 'web', 'programming'],
    skills: ['JavaScript ES6+', 'DOM Manipulation', 'Async Programming', 'Error Handling'],
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop',
    instructor: { name: 'Sarah Chen', bio: 'Senior Frontend Engineer at Google', avatar: 'SC' },
    lessons: [
      { title: 'Introduction to Modern JS', videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '15:30',
        checkpoints: [{ timestamp: 300, question: 'What keyword declares a block-scoped variable?', options: ['var','let','const','define'], correctAnswer: 1 }] },
      { title: 'Variables & Data Types', videoUrl: 'https://www.youtube.com/embed/edlFjlzxkSI', duration: '22:15',
        checkpoints: [{ timestamp: 600, question: 'Which is NOT a primitive type?', options: ['string','number','array','boolean'], correctAnswer: 2 }] },
      { title: 'Functions & Arrow Functions', videoUrl: 'https://www.youtube.com/embed/mrYMzpbFz18', duration: '18:45', checkpoints: [] },
      { title: 'DOM Manipulation Deep Dive', videoUrl: 'https://www.youtube.com/embed/y17RuWkWdn8', duration: '25:00', checkpoints: [] },
      { title: 'Async JavaScript & Promises', videoUrl: 'https://www.youtube.com/embed/ZYb_ZU8LNxs', duration: '20:30', checkpoints: [] }
    ],
    quiz: [
      { question: 'What does "let" provide that "var" does not?', options: ['Hoisting','Block scope','Global scope','Type checking'], correctAnswer: 1, explanation: '"let" is block-scoped while "var" is function-scoped.' },
      { question: 'Arrow functions do NOT have their own:', options: ['Parameters','Return value','this binding','Variable declarations'], correctAnswer: 2, explanation: 'Arrow functions inherit "this" from enclosing scope.' },
      { question: 'Which method returns a new Promise?', options: ['Promise.resolve()','Promise.reject()','Promise.all()','All of the above'], correctAnswer: 3, explanation: 'All three methods return new Promise objects.' }
    ]
  },
  {
    id: 'c2', title: 'React.js Complete Guide', description: 'Build modern web apps with React 18. Learn hooks, context, routing, state management and deploy production apps.',
    category: 'web-dev', difficulty: 'Intermediate', duration: '12h 15m', rating: 4.9, enrolledCount: 18500,
    tags: ['react', 'javascript', 'frontend', 'hooks', 'spa', 'web'],
    skills: ['React Components', 'Hooks', 'State Management', 'React Router'],
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
    instructor: { name: 'Alex Rivera', bio: 'React Core Contributor', avatar: 'AR' },
    lessons: [
      { title: 'React Fundamentals', videoUrl: 'https://www.youtube.com/embed/Tn6-PIqc4UM', duration: '20:00', checkpoints: [] },
      { title: 'Components & Props', videoUrl: 'https://www.youtube.com/embed/PHaECbrKgs0', duration: '18:30', checkpoints: [] },
      { title: 'useState & useEffect', videoUrl: 'https://www.youtube.com/embed/O6P86uwfdR0', duration: '22:45', checkpoints: [] },
      { title: 'Context API & useReducer', videoUrl: 'https://www.youtube.com/embed/5LrDIWkK_Bc', duration: '25:00', checkpoints: [] },
      { title: 'React Router v6', videoUrl: 'https://www.youtube.com/embed/Ul3y1LXxzdU', duration: '19:15', checkpoints: [] }
    ],
    quiz: [
      { question: 'What hook manages state in functional components?', options: ['useEffect','useState','useContext','useReducer'], correctAnswer: 1, explanation: 'useState is the primary hook for managing local state.' },
      { question: 'Virtual DOM helps React by:', options: ['Eliminating the real DOM','Minimizing real DOM updates','Adding more DOM nodes','None'], correctAnswer: 1, explanation: 'React diffs the virtual DOM to minimize expensive real DOM operations.' },
      { question: 'useEffect runs:', options: ['Before render','After render','During render','Never'], correctAnswer: 1, explanation: 'useEffect runs after the component renders to the screen.' }
    ]
  },
  {
    id: 'c3', title: 'Node.js Backend Development', description: 'Build scalable REST APIs with Node.js, Express, and MongoDB. Authentication, middleware, and deployment.',
    category: 'web-dev', difficulty: 'Intermediate', duration: '10h 45m', rating: 4.7, enrolledCount: 9800,
    tags: ['nodejs', 'express', 'backend', 'api', 'mongodb', 'javascript'],
    skills: ['REST APIs', 'Express.js', 'MongoDB', 'Authentication'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
    instructor: { name: 'James Wilson', bio: 'Full-Stack Lead at Netflix', avatar: 'JW' },
    lessons: [
      { title: 'Node.js Fundamentals', videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4', duration: '23:00', checkpoints: [] },
      { title: 'Express.js Setup & Routing', videoUrl: 'https://www.youtube.com/embed/SccSCuHhOw0', duration: '19:30', checkpoints: [] },
      { title: 'MongoDB & Mongoose', videoUrl: 'https://www.youtube.com/embed/DZBGEVgL2eE', duration: '25:15', checkpoints: [] },
      { title: 'Authentication with JWT', videoUrl: 'https://www.youtube.com/embed/mbsmsi7l3r4', duration: '22:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Express middleware executes:', options: ['Only on GET','Before route handler','After response','On error only'], correctAnswer: 1, explanation: 'Middleware functions execute in order before the final route handler.' },
      { question: 'JWT stands for:', options: ['Java Web Token','JSON Web Token','JavaScript Web Tool','JSON Write Transfer'], correctAnswer: 1, explanation: 'JSON Web Token is used for stateless authentication.' }
    ]
  },
  {
    id: 'c4', title: 'CSS Mastery & Animations', description: 'Create stunning interfaces with advanced CSS. Flexbox, Grid, custom properties, animations, and responsive design.',
    category: 'web-dev', difficulty: 'Beginner', duration: '6h 20m', rating: 4.6, enrolledCount: 7600,
    tags: ['css', 'animations', 'flexbox', 'grid', 'responsive', 'frontend'],
    skills: ['CSS Grid', 'Flexbox', 'Animations', 'Responsive Design'],
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=340&fit=crop',
    instructor: { name: 'Maya Patel', bio: 'UI/UX Designer at Figma', avatar: 'MP' },
    lessons: [
      { title: 'Advanced Selectors & Specificity', videoUrl: 'https://www.youtube.com/embed/l1mER1bV0N0', duration: '16:00', checkpoints: [] },
      { title: 'Flexbox Deep Dive', videoUrl: 'https://www.youtube.com/embed/fYq5PXgSsbE', duration: '21:30', checkpoints: [] },
      { title: 'CSS Grid Layout', videoUrl: 'https://www.youtube.com/embed/EiNiSFIPIQE', duration: '24:00', checkpoints: [] },
      { title: 'Keyframe Animations', videoUrl: 'https://www.youtube.com/embed/f1WMjDx4snI', duration: '18:45', checkpoints: [] }
    ],
    quiz: [
      { question: 'Which CSS property creates a grid container?', options: ['display: flex','display: grid','display: block','display: inline'], correctAnswer: 1, explanation: 'display: grid creates a grid formatting context.' },
      { question: 'Flexbox default direction is:', options: ['column','row','row-reverse','column-reverse'], correctAnswer: 1, explanation: 'The default flex-direction is row (horizontal).' }
    ]
  },
  {
    id: 'c5', title: 'Full-Stack TypeScript', description: 'End-to-end TypeScript development. Type safety, generics, decorators, and building full-stack apps.',
    category: 'web-dev', difficulty: 'Advanced', duration: '14h 00m', rating: 4.8, enrolledCount: 6200,
    tags: ['typescript', 'javascript', 'fullstack', 'types', 'web'],
    skills: ['TypeScript', 'Type Systems', 'Generics', 'Full-Stack Development'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
    instructor: { name: 'Sarah Chen', bio: 'Senior Frontend Engineer at Google', avatar: 'SC' },
    lessons: [
      { title: 'TypeScript Basics', videoUrl: 'https://www.youtube.com/embed/BwuLxPH8IDs', duration: '20:00', checkpoints: [] },
      { title: 'Interfaces & Types', videoUrl: 'https://www.youtube.com/embed/NjN00cM18Z4', duration: '22:00', checkpoints: [] },
      { title: 'Generics', videoUrl: 'https://www.youtube.com/embed/nViEqpgwxHE', duration: '19:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'TypeScript is a superset of:', options: ['Java','Python','JavaScript','C++'], correctAnswer: 2, explanation: 'TypeScript extends JavaScript with type annotations.' }
    ]
  },
  // ── AI & Machine Learning ──────────────────────
  {
    id: 'c6', title: 'Machine Learning Fundamentals', description: 'Understand ML algorithms from scratch — linear regression, decision trees, neural networks, and real-world applications.',
    category: 'ai-ml', difficulty: 'Beginner', duration: '11h 30m', rating: 4.9, enrolledCount: 15200,
    tags: ['machine-learning', 'algorithms', 'regression', 'classification', 'ai'],
    skills: ['ML Algorithms', 'Model Training', 'Feature Engineering', 'Evaluation Metrics'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Priya Sharma', bio: 'ML Researcher at DeepMind', avatar: 'PS' },
    lessons: [
      { title: 'What is Machine Learning?', videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU', duration: '18:00', checkpoints: [] },
      { title: 'Linear Regression', videoUrl: 'https://www.youtube.com/embed/nk2CQITm_eo', duration: '25:00', checkpoints: [] },
      { title: 'Classification Algorithms', videoUrl: 'https://www.youtube.com/embed/yIYKR4sgzI8', duration: '22:30', checkpoints: [] },
      { title: 'Neural Networks Intro', videoUrl: 'https://www.youtube.com/embed/aircAruvnKk', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Supervised learning requires:', options: ['Unlabeled data','Labeled data','No data','Random data'], correctAnswer: 1, explanation: 'Supervised learning uses labeled training examples.' },
      { question: 'Overfitting means:', options: ['Model is too simple','Model memorizes training data','Model generalizes well','Model is fast'], correctAnswer: 1, explanation: 'Overfitting occurs when a model learns noise in training data.' }
    ]
  },
  {
    id: 'c7', title: 'Deep Learning with Python', description: 'Build neural networks with TensorFlow and Keras. CNNs, RNNs, GANs, and transfer learning for real projects.',
    category: 'ai-ml', difficulty: 'Advanced', duration: '15h 00m', rating: 4.8, enrolledCount: 8400,
    tags: ['deep-learning', 'tensorflow', 'neural-networks', 'python', 'ai', 'cnn'],
    skills: ['Neural Networks', 'TensorFlow', 'CNNs', 'Transfer Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Priya Sharma', bio: 'ML Researcher at DeepMind', avatar: 'PS' },
    lessons: [
      { title: 'Deep Learning Overview', videoUrl: 'https://www.youtube.com/embed/aircAruvnKk', duration: '20:00', checkpoints: [] },
      { title: 'Building Your First Neural Network', videoUrl: 'https://www.youtube.com/embed/Wo5dMEP_BbI', duration: '30:00', checkpoints: [] },
      { title: 'Convolutional Neural Networks', videoUrl: 'https://www.youtube.com/embed/YRhxdVk_sIs', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'CNNs are best for:', options: ['Text data','Image data','Tabular data','Time series'], correctAnswer: 1, explanation: 'CNNs excel at spatial pattern recognition in images.' }
    ]
  },
  {
    id: 'c8', title: 'Natural Language Processing', description: 'Text processing, sentiment analysis, chatbots, and transformers. Build NLP applications from scratch.',
    category: 'ai-ml', difficulty: 'Intermediate', duration: '10h 15m', rating: 4.7, enrolledCount: 6800,
    tags: ['nlp', 'text-processing', 'transformers', 'ai', 'python', 'chatbots'],
    skills: ['Text Processing', 'Sentiment Analysis', 'Transformers', 'Chatbot Development'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Lin Zhang', bio: 'NLP Lead at OpenAI', avatar: 'LZ' },
    lessons: [
      { title: 'NLP Fundamentals', videoUrl: 'https://www.youtube.com/embed/fOvTtapxa9c', duration: '22:00', checkpoints: [] },
      { title: 'Text Preprocessing', videoUrl: 'https://www.youtube.com/embed/nxhCyeRR75Q', duration: '18:00', checkpoints: [] },
      { title: 'Transformers & Attention', videoUrl: 'https://www.youtube.com/embed/SZorAJ4I-sA', duration: '30:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Tokenization is:', options: ['Model training','Splitting text into tokens','Image processing','Data storage'], correctAnswer: 1, explanation: 'Tokenization breaks text into individual tokens for processing.' }
    ]
  },
  {
    id: 'c9', title: 'Computer Vision Projects', description: 'Object detection, image segmentation, face recognition. Hands-on CV projects with OpenCV and deep learning.',
    category: 'ai-ml', difficulty: 'Advanced', duration: '13h 45m', rating: 4.6, enrolledCount: 5100,
    tags: ['computer-vision', 'opencv', 'image-processing', 'deep-learning', 'ai'],
    skills: ['OpenCV', 'Object Detection', 'Image Segmentation', 'Face Recognition'],
    thumbnail: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Priya Sharma', bio: 'ML Researcher at DeepMind', avatar: 'PS' },
    lessons: [
      { title: 'Computer Vision Basics', videoUrl: 'https://www.youtube.com/embed/oXlwWbU8l2o', duration: '20:00', checkpoints: [] },
      { title: 'Image Processing with OpenCV', videoUrl: 'https://www.youtube.com/embed/oXlwWbU8l2o', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'A convolution operation in CV:', options: ['Adds colors','Applies a filter/kernel','Rotates image','Deletes pixels'], correctAnswer: 1, explanation: 'Convolution applies a kernel/filter to detect features.' }
    ]
  },
  // ── Data Science ───────────────────────────────
  {
    id: 'c10', title: 'Python for Data Science', description: 'NumPy, Pandas, Matplotlib, and Seaborn for data analysis. Clean, visualize, and extract insights from real datasets.',
    category: 'data-science', difficulty: 'Beginner', duration: '9h 00m', rating: 4.8, enrolledCount: 20100,
    tags: ['python', 'pandas', 'numpy', 'data-analysis', 'visualization'],
    skills: ['Pandas', 'NumPy', 'Data Visualization', 'Data Cleaning'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    instructor: { name: 'Emma Rodriguez', bio: 'Data Scientist at Spotify', avatar: 'ER' },
    lessons: [
      { title: 'Python Refresher', videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8', duration: '15:00', checkpoints: [] },
      { title: 'NumPy Essentials', videoUrl: 'https://www.youtube.com/embed/QUT1VHiLmmI', duration: '22:00', checkpoints: [] },
      { title: 'Pandas for Data Analysis', videoUrl: 'https://www.youtube.com/embed/vmEHCJofslg', duration: '28:00', checkpoints: [] },
      { title: 'Data Visualization', videoUrl: 'https://www.youtube.com/embed/UO98lJQ3QGI', duration: '20:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Pandas DataFrame is:', options: ['1D array','2D table','3D matrix','Graph'], correctAnswer: 1, explanation: 'DataFrame is a 2D labeled data structure with columns.' },
      { question: 'NumPy is optimized for:', options: ['Web scraping','Numerical computing','Web development','Database management'], correctAnswer: 1, explanation: 'NumPy provides efficient numerical array operations.' }
    ]
  },
  {
    id: 'c11', title: 'SQL & Database Analytics', description: 'Master SQL queries, joins, window functions, and database design for analytics and business intelligence.',
    category: 'data-science', difficulty: 'Beginner', duration: '7h 30m', rating: 4.7, enrolledCount: 11300,
    tags: ['sql', 'database', 'analytics', 'queries', 'data'],
    skills: ['SQL Queries', 'Joins', 'Window Functions', 'Database Design'],
    thumbnail: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=600&h=340&fit=crop',
    instructor: { name: 'Emma Rodriguez', bio: 'Data Scientist at Spotify', avatar: 'ER' },
    lessons: [
      { title: 'SQL Basics', videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY', duration: '20:00', checkpoints: [] },
      { title: 'Advanced Queries', videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'JOIN combines:', options: ['Rows from one table','Rows from multiple tables','Columns only','Nothing'], correctAnswer: 1, explanation: 'JOIN combines rows from two or more tables based on a related column.' }
    ]
  },
  {
    id: 'c12', title: 'Statistical Analysis & Probability', description: 'Hypothesis testing, probability distributions, A/B testing, and statistical modeling for data-driven decisions.',
    category: 'data-science', difficulty: 'Intermediate', duration: '8h 45m', rating: 4.5, enrolledCount: 5400,
    tags: ['statistics', 'probability', 'hypothesis-testing', 'data-science', 'analysis'],
    skills: ['Hypothesis Testing', 'Probability', 'A/B Testing', 'Statistical Modeling'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Michael Brown', bio: 'Statistics Professor at MIT', avatar: 'MB' },
    lessons: [
      { title: 'Descriptive Statistics', videoUrl: 'https://www.youtube.com/embed/xxpc-HPKN28', duration: '18:00', checkpoints: [] },
      { title: 'Probability Distributions', videoUrl: 'https://www.youtube.com/embed/xxpc-HPKN28', duration: '24:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'p-value represents:', options: ['Probability of data given null hypothesis','Sample size','Mean value','Standard deviation'], correctAnswer: 0, explanation: 'p-value is the probability of observing results as extreme, assuming the null hypothesis is true.' }
    ]
  },
  {
    id: 'c13', title: 'Big Data with Apache Spark', description: 'Process massive datasets with Spark. RDDs, DataFrames, Spark SQL, and building data pipelines at scale.',
    category: 'data-science', difficulty: 'Advanced', duration: '11h 00m', rating: 4.6, enrolledCount: 4200,
    tags: ['big-data', 'spark', 'distributed-computing', 'data-engineering', 'python'],
    skills: ['Apache Spark', 'Data Pipelines', 'Distributed Computing', 'Spark SQL'],
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Michael Brown', bio: 'Statistics Professor at MIT', avatar: 'MB' },
    lessons: [
      { title: 'Introduction to Big Data', videoUrl: 'https://www.youtube.com/embed/GZiQ1GjrL04', duration: '20:00', checkpoints: [] },
      { title: 'Spark Architecture', videoUrl: 'https://www.youtube.com/embed/GZiQ1GjrL04', duration: '22:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Spark processes data:', options: ['In memory','On disk only','In the cloud only','Using SQL only'], correctAnswer: 0, explanation: 'Spark is known for in-memory data processing which makes it fast.' }
    ]
  },
  // ── Mobile Development ─────────────────────────
  {
    id: 'c14', title: 'React Native Mobile Apps', description: 'Build cross-platform iOS and Android apps with React Native. Navigation, state management, native modules.',
    category: 'mobile-dev', difficulty: 'Intermediate', duration: '13h 15m', rating: 4.7, enrolledCount: 9200,
    tags: ['react-native', 'mobile', 'ios', 'android', 'javascript', 'cross-platform'],
    skills: ['React Native', 'Mobile UI', 'Navigation', 'Native Modules'],
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop',
    instructor: { name: 'Alex Rivera', bio: 'React Core Contributor', avatar: 'AR' },
    lessons: [
      { title: 'React Native Setup', videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc', duration: '18:00', checkpoints: [] },
      { title: 'Core Components', videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'React Native renders:', options: ['Web views','Native UI components','HTML elements','Canvas'], correctAnswer: 1, explanation: 'React Native compiles to native platform UI components.' }
    ]
  },
  {
    id: 'c15', title: 'Flutter & Dart Complete', description: 'Build beautiful cross-platform apps with Flutter. Widgets, state management, animations, and Firebase integration.',
    category: 'mobile-dev', difficulty: 'Beginner', duration: '11h 30m', rating: 4.8, enrolledCount: 10500,
    tags: ['flutter', 'dart', 'mobile', 'cross-platform', 'ios', 'android'],
    skills: ['Flutter Widgets', 'Dart Language', 'State Management', 'Firebase'],
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop',
    instructor: { name: 'Kim Lee', bio: 'Flutter GDE & App Developer', avatar: 'KL' },
    lessons: [
      { title: 'Dart Language Basics', videoUrl: 'https://www.youtube.com/embed/Ej_Pcr4uC2Q', duration: '20:00', checkpoints: [] },
      { title: 'Flutter Widgets', videoUrl: 'https://www.youtube.com/embed/Ej_Pcr4uC2Q', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'In Flutter, everything is a:', options: ['Component','View','Widget','Module'], correctAnswer: 2, explanation: 'In Flutter, the UI is built using a tree of widgets.' }
    ]
  },
  {
    id: 'c16', title: 'iOS Development with Swift', description: 'Build native iOS apps with Swift and SwiftUI. UIKit, Core Data, networking, and App Store deployment.',
    category: 'mobile-dev', difficulty: 'Intermediate', duration: '14h 00m', rating: 4.6, enrolledCount: 6700,
    tags: ['ios', 'swift', 'swiftui', 'mobile', 'apple', 'native'],
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
    thumbnail: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=340&fit=crop',
    instructor: { name: 'Kim Lee', bio: 'Flutter GDE & App Developer', avatar: 'KL' },
    lessons: [
      { title: 'Swift Fundamentals', videoUrl: 'https://www.youtube.com/embed/comQ7WRWM_A', duration: '22:00', checkpoints: [] },
      { title: 'SwiftUI Layouts', videoUrl: 'https://www.youtube.com/embed/comQ7WRWM_A', duration: '26:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'SwiftUI uses:', options: ['Imperative UI','Declarative UI','HTML','XML'], correctAnswer: 1, explanation: 'SwiftUI uses a declarative syntax to build interfaces.' }
    ]
  },
  // ── Cybersecurity ──────────────────────────────
  {
    id: 'c17', title: 'Ethical Hacking & Penetration Testing', description: 'Learn ethical hacking techniques. Network scanning, vulnerability assessment, exploits, and security auditing.',
    category: 'cybersecurity', difficulty: 'Intermediate', duration: '12h 00m', rating: 4.8, enrolledCount: 13400,
    tags: ['ethical-hacking', 'penetration-testing', 'security', 'networking', 'kali-linux'],
    skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Kali Linux'],
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=340&fit=crop',
    instructor: { name: 'Marcus Johnson', bio: 'Cybersecurity Consultant, Ex-NSA', avatar: 'MJ' },
    lessons: [
      { title: 'Introduction to Ethical Hacking', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', duration: '20:00', checkpoints: [] },
      { title: 'Network Scanning with Nmap', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Ethical hacking is also called:', options: ['Black hat hacking','White hat hacking','Grey hat hacking','Script kidding'], correctAnswer: 1, explanation: 'White hat hackers perform authorized security testing.' }
    ]
  },
  {
    id: 'c18', title: 'Web Security & OWASP Top 10', description: 'Protect web applications from XSS, SQL injection, CSRF. Understand OWASP Top 10 vulnerabilities and defenses.',
    category: 'cybersecurity', difficulty: 'Beginner', duration: '7h 45m', rating: 4.7, enrolledCount: 8900,
    tags: ['web-security', 'owasp', 'xss', 'sql-injection', 'security'],
    skills: ['OWASP Top 10', 'XSS Prevention', 'SQL Injection Defense', 'Security Headers'],
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=340&fit=crop',
    instructor: { name: 'Marcus Johnson', bio: 'Cybersecurity Consultant, Ex-NSA', avatar: 'MJ' },
    lessons: [
      { title: 'Web Security Basics', videoUrl: 'https://www.youtube.com/embed/hxR9AS_Nh0M', duration: '18:00', checkpoints: [] },
      { title: 'SQL Injection', videoUrl: 'https://www.youtube.com/embed/hxR9AS_Nh0M', duration: '22:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'XSS stands for:', options: ['Cross Site Scripting','Cross Server Security','X-Site Standard','Cross System Service'], correctAnswer: 0, explanation: 'Cross-Site Scripting (XSS) injects malicious scripts into web pages.' }
    ]
  },
  {
    id: 'c19', title: 'Cryptography Essentials', description: 'Encryption, hashing, digital signatures, and PKI. Understand how security protocols protect data.',
    category: 'cybersecurity', difficulty: 'Advanced', duration: '9h 30m', rating: 4.5, enrolledCount: 3800,
    tags: ['cryptography', 'encryption', 'hashing', 'security', 'protocols'],
    skills: ['Encryption', 'Hashing', 'Digital Signatures', 'PKI'],
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Sarah Kim', bio: 'Cryptography Researcher at MIT', avatar: 'SK' },
    lessons: [
      { title: 'Symmetric Encryption', videoUrl: 'https://www.youtube.com/embed/AQDCe585Lnc', duration: '20:00', checkpoints: [] },
      { title: 'Public Key Cryptography', videoUrl: 'https://www.youtube.com/embed/AQDCe585Lnc', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'AES is a type of:', options: ['Asymmetric encryption','Symmetric encryption','Hashing','Digital signature'], correctAnswer: 1, explanation: 'AES (Advanced Encryption Standard) uses the same key for encryption and decryption.' }
    ]
  },
  // ── Cloud Computing ────────────────────────────
  {
    id: 'c20', title: 'AWS Cloud Practitioner', description: 'Master AWS fundamentals. EC2, S3, Lambda, RDS, IAM, and prepare for the AWS certification exam.',
    category: 'cloud', difficulty: 'Beginner', duration: '10h 00m', rating: 4.8, enrolledCount: 16300,
    tags: ['aws', 'cloud', 'ec2', 's3', 'lambda', 'certification'],
    skills: ['AWS Services', 'Cloud Architecture', 'IAM', 'Serverless'],
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop',
    instructor: { name: 'David Park', bio: 'AWS Solutions Architect', avatar: 'DP' },
    lessons: [
      { title: 'Cloud Computing Overview', videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE', duration: '18:00', checkpoints: [] },
      { title: 'EC2 & Virtual Servers', videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE', duration: '24:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'S3 stands for:', options: ['Simple Storage Service','Server Side Scripting','Secure Socket Service','System Storage Stack'], correctAnswer: 0, explanation: 'Amazon S3 (Simple Storage Service) is object storage.' }
    ]
  },
  {
    id: 'c21', title: 'Docker & Kubernetes', description: 'Containerize applications with Docker and orchestrate with Kubernetes. CI/CD, microservices architecture.',
    category: 'cloud', difficulty: 'Intermediate', duration: '11h 45m', rating: 4.7, enrolledCount: 8700,
    tags: ['docker', 'kubernetes', 'containers', 'devops', 'microservices', 'cloud'],
    skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'CI/CD'],
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=340&fit=crop',
    instructor: { name: 'David Park', bio: 'AWS Solutions Architect', avatar: 'DP' },
    lessons: [
      { title: 'Docker Fundamentals', videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo', duration: '22:00', checkpoints: [] },
      { title: 'Kubernetes Architecture', videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'A Docker container is:', options: ['A virtual machine','A lightweight isolated process','A physical server','A database'], correctAnswer: 1, explanation: 'Containers are lightweight, isolated processes sharing the host OS kernel.' }
    ]
  },
  {
    id: 'c22', title: 'Serverless Architecture', description: 'Build event-driven serverless apps with AWS Lambda, Azure Functions, and Google Cloud Functions.',
    category: 'cloud', difficulty: 'Advanced', duration: '8h 30m', rating: 4.6, enrolledCount: 4500,
    tags: ['serverless', 'lambda', 'cloud-functions', 'event-driven', 'cloud'],
    skills: ['AWS Lambda', 'API Gateway', 'Event-Driven Architecture', 'Serverless Framework'],
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=340&fit=crop',
    instructor: { name: 'David Park', bio: 'AWS Solutions Architect', avatar: 'DP' },
    lessons: [
      { title: 'Serverless Concepts', videoUrl: 'https://www.youtube.com/embed/W_VV2Fx32_Y', duration: '18:00', checkpoints: [] },
      { title: 'AWS Lambda Deep Dive', videoUrl: 'https://www.youtube.com/embed/W_VV2Fx32_Y', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Serverless means:', options: ['No servers exist','You don\'t manage servers','Free hosting','No code needed'], correctAnswer: 1, explanation: 'Serverless means the cloud provider manages server infrastructure.' }
    ]
  },
  // ── Extra courses for variety ──────────────────
  {
    id: 'c23', title: 'Git & GitHub Mastery', description: 'Version control with Git. Branching, merging, rebasing, pull requests, and collaborative workflows.',
    category: 'web-dev', difficulty: 'Beginner', duration: '5h 00m', rating: 4.7, enrolledCount: 14200,
    tags: ['git', 'github', 'version-control', 'collaboration', 'devops'],
    skills: ['Git Commands', 'Branching', 'Pull Requests', 'Collaborative Workflows'],
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=340&fit=crop',
    instructor: { name: 'James Wilson', bio: 'Full-Stack Lead at Netflix', avatar: 'JW' },
    lessons: [
      { title: 'Git Basics', videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk', duration: '20:00', checkpoints: [] },
      { title: 'Branching & Merging', videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk', duration: '22:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'git merge combines:', options: ['Files','Branches','Commits only','Repositories'], correctAnswer: 1, explanation: 'git merge integrates changes from one branch into another.' }
    ]
  },
  {
    id: 'c24', title: 'Next.js Full-Stack Framework', description: 'Server-side rendering, static generation, API routes, and building production React apps with Next.js.',
    category: 'web-dev', difficulty: 'Advanced', duration: '12h 30m', rating: 4.9, enrolledCount: 7800,
    tags: ['nextjs', 'react', 'ssr', 'fullstack', 'javascript', 'web'],
    skills: ['SSR', 'Static Generation', 'API Routes', 'Full-Stack React'],
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=340&fit=crop',
    instructor: { name: 'Sarah Chen', bio: 'Senior Frontend Engineer at Google', avatar: 'SC' },
    lessons: [
      { title: 'Next.js Introduction', videoUrl: 'https://www.youtube.com/embed/mTz0GXj8NN0', duration: '18:00', checkpoints: [] },
      { title: 'Pages & Routing', videoUrl: 'https://www.youtube.com/embed/mTz0GXj8NN0', duration: '22:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'getServerSideProps runs on:', options: ['Client side','Server side','Both','Neither'], correctAnswer: 1, explanation: 'getServerSideProps executes on the server for every request.' }
    ]
  },
  {
    id: 'c25', title: 'Power BI & Data Visualization', description: 'Create interactive dashboards and reports with Power BI. DAX formulas, data modeling, and storytelling with data.',
    category: 'data-science', difficulty: 'Beginner', duration: '8h 15m', rating: 4.6, enrolledCount: 9400,
    tags: ['power-bi', 'visualization', 'dashboards', 'data-analysis', 'business-intelligence'],
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Dashboard Design'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    instructor: { name: 'Emma Rodriguez', bio: 'Data Scientist at Spotify', avatar: 'ER' },
    lessons: [
      { title: 'Power BI Interface', videoUrl: 'https://www.youtube.com/embed/AGrl-H87pRU', duration: '20:00', checkpoints: [] },
      { title: 'Creating Visualizations', videoUrl: 'https://www.youtube.com/embed/AGrl-H87pRU', duration: '25:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'DAX is used for:', options: ['Data extraction','Calculations & measures','Data import','Chart styling'], correctAnswer: 1, explanation: 'DAX (Data Analysis Expressions) creates custom calculations in Power BI.' }
    ]
  },
  {
    id: 'c26', title: 'Android with Kotlin', description: 'Build native Android apps with Kotlin. Jetpack Compose, MVVM architecture, Room database, and Retrofit.',
    category: 'mobile-dev', difficulty: 'Beginner', duration: '12h 00m', rating: 4.7, enrolledCount: 8300,
    tags: ['android', 'kotlin', 'jetpack-compose', 'mobile', 'native'],
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room Database'],
    thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=340&fit=crop',
    instructor: { name: 'Alex Rivera', bio: 'React Core Contributor', avatar: 'AR' },
    lessons: [
      { title: 'Kotlin Basics', videoUrl: 'https://www.youtube.com/embed/F9UC9DY-vIU', duration: '22:00', checkpoints: [] },
      { title: 'Jetpack Compose UI', videoUrl: 'https://www.youtube.com/embed/F9UC9DY-vIU', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Kotlin is officially supported for:', options: ['iOS development','Android development','Windows apps','All of the above'], correctAnswer: 1, explanation: 'Kotlin is Google\'s preferred language for Android development.' }
    ]
  },
  {
    id: 'c27', title: 'Network Security Fundamentals', description: 'Firewalls, VPNs, IDS/IPS, network protocols, and security architecture. Defend networks from cyber threats.',
    category: 'cybersecurity', difficulty: 'Beginner', duration: '8h 00m', rating: 4.5, enrolledCount: 7100,
    tags: ['network-security', 'firewalls', 'vpn', 'protocols', 'security'],
    skills: ['Firewalls', 'VPN Configuration', 'IDS/IPS', 'Network Protocols'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
    instructor: { name: 'Marcus Johnson', bio: 'Cybersecurity Consultant, Ex-NSA', avatar: 'MJ' },
    lessons: [
      { title: 'Network Security Basics', videoUrl: 'https://www.youtube.com/embed/E03gh1huvW4', duration: '18:00', checkpoints: [] },
      { title: 'Firewall Configuration', videoUrl: 'https://www.youtube.com/embed/E03gh1huvW4', duration: '24:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'A firewall:', options: ['Speeds up internet','Filters network traffic','Stores passwords','Encrypts files'], correctAnswer: 1, explanation: 'Firewalls monitor and filter incoming and outgoing network traffic.' }
    ]
  },
  {
    id: 'c28', title: 'Terraform & Infrastructure as Code', description: 'Automate cloud infrastructure with Terraform. HCL syntax, modules, state management, multi-cloud deployments.',
    category: 'cloud', difficulty: 'Intermediate', duration: '9h 00m', rating: 4.6, enrolledCount: 5600,
    tags: ['terraform', 'iac', 'devops', 'cloud', 'automation'],
    skills: ['Terraform', 'HCL', 'Infrastructure Automation', 'Multi-Cloud'],
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop',
    instructor: { name: 'David Park', bio: 'AWS Solutions Architect', avatar: 'DP' },
    lessons: [
      { title: 'IaC Concepts', videoUrl: 'https://www.youtube.com/embed/tomUWcQ0P3k', duration: '18:00', checkpoints: [] },
      { title: 'Terraform Basics', videoUrl: 'https://www.youtube.com/embed/tomUWcQ0P3k', duration: '24:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'Terraform uses which language?', options: ['YAML','JSON','HCL','Python'], correctAnswer: 2, explanation: 'Terraform uses HCL (HashiCorp Configuration Language).' }
    ]
  },
  {
    id: 'c29', title: 'Reinforcement Learning', description: 'Train AI agents to make decisions. Q-learning, policy gradients, deep RL, and building game-playing agents.',
    category: 'ai-ml', difficulty: 'Advanced', duration: '14h 30m', rating: 4.7, enrolledCount: 3900,
    tags: ['reinforcement-learning', 'ai', 'agents', 'q-learning', 'deep-rl'],
    skills: ['Q-Learning', 'Policy Gradients', 'Deep RL', 'OpenAI Gym'],
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=340&fit=crop',
    instructor: { name: 'Dr. Lin Zhang', bio: 'NLP Lead at OpenAI', avatar: 'LZ' },
    lessons: [
      { title: 'RL Fundamentals', videoUrl: 'https://www.youtube.com/embed/2pWv7GOvuf0', duration: '22:00', checkpoints: [] },
      { title: 'Q-Learning Algorithm', videoUrl: 'https://www.youtube.com/embed/2pWv7GOvuf0', duration: '28:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'In RL, the agent learns from:', options: ['Labels','Rewards','Rules','Demonstrations'], correctAnswer: 1, explanation: 'RL agents learn by maximizing cumulative rewards through trial and error.' }
    ]
  },
  {
    id: 'c30', title: 'GraphQL API Development', description: 'Build flexible APIs with GraphQL. Schema design, resolvers, subscriptions, and Apollo Server/Client.',
    category: 'web-dev', difficulty: 'Intermediate', duration: '8h 00m', rating: 4.6, enrolledCount: 5200,
    tags: ['graphql', 'api', 'apollo', 'backend', 'javascript', 'web'],
    skills: ['GraphQL Schema', 'Resolvers', 'Apollo', 'API Design'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
    instructor: { name: 'James Wilson', bio: 'Full-Stack Lead at Netflix', avatar: 'JW' },
    lessons: [
      { title: 'GraphQL vs REST', videoUrl: 'https://www.youtube.com/embed/ZQL7tL2S0oQ', duration: '18:00', checkpoints: [] },
      { title: 'Schema & Types', videoUrl: 'https://www.youtube.com/embed/ZQL7tL2S0oQ', duration: '24:00', checkpoints: [] }
    ],
    quiz: [
      { question: 'GraphQL allows clients to:', options: ['Request exactly the data they need','Only get all data','Only use REST','Write SQL queries'], correctAnswer: 0, explanation: 'GraphQL lets clients specify exactly which fields they need.' }
    ]
  }
];

// Sample comments for courses
const SAMPLE_COMMENTS = [
  { id: 'cm1', courseId: 'c1', userName: 'JohnDoe', avatar: 'JD', content: 'Amazing course! The async/await section was incredibly clear.', likes: 24, time: '2 days ago' },
  { id: 'cm2', courseId: 'c1', userName: 'EmilyS', avatar: 'ES', content: 'Best JavaScript course I\'ve taken. The projects are very practical.', likes: 18, time: '5 days ago' },
  { id: 'cm3', courseId: 'c1', userName: 'DevRaj', avatar: 'DR', content: 'Could you add more content on closures? Otherwise excellent!', likes: 7, time: '1 week ago' },
  { id: 'cm4', courseId: 'c2', userName: 'ReactFan', avatar: 'RF', content: 'The hooks explanation is the best I\'ve seen. Thank you!', likes: 31, time: '3 days ago' },
  { id: 'cm5', courseId: 'c2', userName: 'NewbieCoder', avatar: 'NC', content: 'Very beginner-friendly despite being intermediate level.', likes: 12, time: '1 week ago' },
  { id: 'cm6', courseId: 'c6', userName: 'MLEnthusiast', avatar: 'ME', content: 'Dr. Sharma explains complex concepts so simply. Love it!', likes: 45, time: '1 day ago' },
  { id: 'cm7', courseId: 'c10', userName: 'DataNerd', avatar: 'DN', content: 'The Pandas section is gold. Used it directly in my project.', likes: 22, time: '4 days ago' },
  { id: 'cm8', courseId: 'c17', userName: 'SecPro', avatar: 'SP', content: 'Ethical hacking explained responsibly. Great course!', likes: 19, time: '2 days ago' }
];

// Badge definitions
const ALL_BADGES = [
  { id: 'b1', name: 'First Steps', icon: '🎯', description: 'Enroll in your first course', requirement: { type: 'enroll', count: 1 } },
  { id: 'b2', name: 'Quick Learner', icon: '⚡', description: 'Complete your first lesson', requirement: { type: 'lesson', count: 1 } },
  { id: 'b3', name: 'Quiz Whiz', icon: '🧠', description: 'Score 100% on any quiz', requirement: { type: 'perfectQuiz', count: 1 } },
  { id: 'b4', name: 'Scholar', icon: '🎓', description: 'Complete 3 courses', requirement: { type: 'complete', count: 3 } },
  { id: 'b5', name: 'Streak Hero', icon: '🔥', description: 'Maintain a 7-day streak', requirement: { type: 'streak', count: 7 } },
  { id: 'b6', name: 'Explorer', icon: '🧭', description: 'Enroll in 5 different categories', requirement: { type: 'categories', count: 5 } },
  { id: 'b7', name: 'Bookworm', icon: '📚', description: 'Complete 10 lessons', requirement: { type: 'lesson', count: 10 } },
  { id: 'b8', name: 'Mastermind', icon: '💎', description: 'Reach Level 10', requirement: { type: 'level', count: 10 } },
  { id: 'b9', name: 'Social Star', icon: '💬', description: 'Post 5 comments', requirement: { type: 'comments', count: 5 } },
  { id: 'b10', name: 'Dedicated', icon: '🏆', description: 'Reach 1000 XP', requirement: { type: 'xp', count: 1000 } },
  { id: 'b11', name: 'Challenger', icon: '⚔️', description: 'Complete 5 daily challenges', requirement: { type: 'challenges', count: 5 } },
  { id: 'b12', name: 'Polyglot', icon: '🌍', description: 'Learn in 3+ categories', requirement: { type: 'categories', count: 3 } }
];

// Daily challenge questions (pulled from various courses)
const DAILY_CHALLENGES = [
  { question: 'What does CSS stand for?', options: ['Computer Style Sheets','Cascading Style Sheets','Creative Style System','Colorful Style Sheets'], correctAnswer: 1, xpReward: 15, category: 'web-dev' },
  { question: 'Which protocol is used for secure web browsing?', options: ['HTTP','FTP','HTTPS','SMTP'], correctAnswer: 2, xpReward: 15, category: 'cybersecurity' },
  { question: 'Python lists are:', options: ['Immutable','Mutable','Fixed size','Read-only'], correctAnswer: 1, xpReward: 15, category: 'data-science' },
  { question: 'In ML, training data is used to:', options: ['Test the model','Build the model','Deploy the model','Delete the model'], correctAnswer: 1, xpReward: 15, category: 'ai-ml' },
  { question: 'REST API stands for:', options: ['Random Endpoint Service','Representational State Transfer','Real-time Event Stream','Remote Execution Standard'], correctAnswer: 1, xpReward: 15, category: 'web-dev' },
  { question: 'Docker containers share the host:', options: ['CPU only','OS kernel','RAM only','Nothing'], correctAnswer: 1, xpReward: 15, category: 'cloud' },
  { question: 'Which is NOT a JavaScript data type?', options: ['string','boolean','float','undefined'], correctAnswer: 2, xpReward: 15, category: 'web-dev' },
  { question: 'K-means is a type of:', options: ['Supervised learning','Unsupervised learning','Reinforcement learning','Transfer learning'], correctAnswer: 1, xpReward: 15, category: 'ai-ml' },
  { question: 'SQL DELETE without WHERE:', options: ['Deletes nothing','Deletes one row','Deletes all rows','Throws error'], correctAnswer: 2, xpReward: 15, category: 'data-science' },
  { question: 'Flutter is built with:', options: ['Java','Swift','Dart','Kotlin'], correctAnswer: 2, xpReward: 15, category: 'mobile-dev' }
];
