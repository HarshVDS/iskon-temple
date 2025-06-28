// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';

// export default function AccordionTransition() {
//     const [expanded, setExpanded] = React.useState(null);

//     const handleExpansion = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : null);
//     };

//     return (
//         <div>
//       <div style={{display:"flex",justifyContent:'space-around'}} className='row'>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel1'}
//                     onChange={handleExpansion('panel1')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel1' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel1' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1-content"
//                         id="panel1-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel2'}
//                     onChange={handleExpansion('panel2')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel2' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel2' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2-content"
//                         id="panel2-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//             <div style={{display:"flex",justifyContent:'space-around'}} className='row'>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel3'}
//                     onChange={handleExpansion('panel3')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel3' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel3' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel3-content"
//                         id="panel3-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel2'}
//                     onChange={handleExpansion('panel2')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel2' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel2' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2-content"
//                         id="panel2-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//             <div style={{display:"flex",justifyContent:'space-around'}} className='row'>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel1'}
//                     onChange={handleExpansion('panel1')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel1' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel1' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1-content"
//                         id="panel1-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel2'}
//                     onChange={handleExpansion('panel2')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel2' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel2' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2-content"
//                         id="panel2-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//             <div style={{display:"flex",justifyContent:'space-around'}} className='row'>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel1'}
//                     onChange={handleExpansion('panel1')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel1' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel1' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1-content"
//                         id="panel1-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion
//                     className='col-md-5'
//                     expanded={expanded === 'panel2'}
//                     onChange={handleExpansion('panel2')}
//                     slots={{ transition: Fade }}
//                     slotProps={{ transition: { timeout: 400 } }}
//                     sx={{
//                         '& .MuiAccordion-region': { height: expanded === 'panel2' ? 'auto' : 0 },
//                         '& .MuiAccordionDetails-root': { display: expanded === 'panel2' ? 'block' : 'none' },
//                     }}
//                 >
//                     <AccordionSummary
//                         className=''            
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2-content"
//                         id="panel2-header"
//                     >
//                         <Typography>  In which state do you work most in Africa ?</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
           
//         </div>
//     );
// }
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
    const [expanded, setExpanded] = React.useState(null);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
        const otherPanel = panel === 'panel1' ? 'panel2' : 'panel1';
        const otherAccordion = document.getElementById(otherPanel);
        if (otherAccordion) {
            otherAccordion.style.height = isExpanded ? '0' : 'auto';
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-around', paddingBlock:'1rem' }} className='row'>
            <Accordion
                id="panel1"
                className='col-md-5'
                expanded={expanded === 'panel1'}
                onChange={handleExpansion('panel1')}
                TransitionProps={{ timeout: 400 }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography> In which state do you work most in Africa?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                id="panel2"
                className='col-md-5'
                expanded={expanded === 'panel2'}
                onChange={handleExpansion('panel2')}
                TransitionProps={{ timeout: 400 }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography> In which state do you work most in Africa?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
            <div  >
                <Accordion
                    className='col-md-5'
                    expanded={expanded === 'panel3'}
                    onChange={handleExpansion('panel3')}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={{
                        '& .MuiAccordion-region': { height: expanded === 'panel3' ? 'auto' : 0 },
                        '& .MuiAccordionDetails-root': { display: expanded === 'panel3' ? 'block' : 'none' },
                    }}
                >
                    <AccordionSummary
                        className=''
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography> In which state do you work most in Africa ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    className='col-md-5'
                    expanded={expanded === 'panel4'}
                    onChange={handleExpansion('panel4')}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={{
                        '& .MuiAccordion-region': { height: expanded === 'panel4' ? 'auto' : 0 },
                        '& .MuiAccordionDetails-root': { display: expanded === 'panel4' ? 'block' : 'none' },
                    }}
                >
                    <AccordionSummary
                        className=''
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        <Typography> In which state do you work most in Africa ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}


