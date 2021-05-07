import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Labelcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const sideBarButtonItems = [
    {
        icon: <InboxIcon />,
        text: 'Inbox'
    },{
        icon: <StarIcon />,
        text: 'Starred'
    },{
        icon: <WatchLaterIcon />,
        text: 'Snoozed'
    },{
        icon: <SendIcon />,
        text: 'Sent'
    },{
        icon: <FileCopyIcon />,
        text: 'Drafts'
    },{
        icon: <Labelcon />,
        text: 'Notes'
    },{
        icon: <ExpandMoreIcon />,
        text: 'More'
    }
]