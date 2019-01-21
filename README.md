# There's Plenty of Room at the Bottom
a simulation of nanotechnology

theresplentyofroomatthebottom.com

### synopsis
- a simulation of nanotechnology
- design, calculation, criticism, and redesign
- make our mistakes in thought rather than deed
projections regarding molecular machines as accurate as those Leonardo da Vinci made - regarding metal machines
- generation and testing of alternatives
- grow spaceships from soil, air, and sunlight
- automated engineering

### reading
- [Original Lecture](https://web.pa.msu.edu/people/yang/RFeynman_plentySpace.pdf)
- [Engines of Creation](http://xaonon.dyndns.org/misc/engines_of_creation.pdf)

### start development
- `npm start` or 
- `yarn start`

### build production
- `npm run build` or 
- `yarn build`

### S3 commands
##### To see bucket files:
- `aws s3 ls s3://theresplentyofroomatthebottom.com`
##### To clear live static app:    
- `aws s3 rm s3://theresplentyofroomatthebottom.com/ --recursive`
##### To deploy
- `aws s3 cp build/ s3://theresplentyofroomatthebottom.com/ --recursive`

### To Do
- Build out Pending Components