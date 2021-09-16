import React, { useCallback } from "react";
import Stories from "react-insta-stories";
import "./story.css";
import storyContent from "./style.json";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { useStore } from "../../contextAPI/store/Provider";
import { setUSer } from "../../contextAPI/actions/LoginAction";
import { useHistory, NavLink as RouterNavLink } from "react-router-dom";
import { WithSeeMore } from "react-insta-stories";
import { Button } from "reactstrap";
const StoryPage = (props) => {
  const history = useHistory();
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  const handleOnClick = useCallback(() => history.push("/anasayfa"), [history]);
  const updateUserInfo = () => {
    const test = props.usr;
    if(!(test.seenStories.includes(props.id2))){
      test.seenStories.push(props.id2);
      dispatch(setUSer(test));
    }
    console.log(user);
  };
  // eslint-disable-next-line
  const handleOnClick2 = useCallback(
    () =>
      history.push(`/strgecis/${props.usr.stories[props.ind + 1].CampaignId}`),
    // eslint-disable-next-line
    [history]
  );
  const handleOnChangeFinish = () => {
    updateUserInfo();
    // eslint-disable-next-line
    if (props.ind == props.usr.stories.length - 1) {
      handleOnClick();
    } else {
      handleOnClick2();
    }
  };

  const handleOnClickBack = () => {
    updateUserInfo();
    handleOnClick();
  };
  const obja = [
    {
      content: ({ action, story }) => {
        return (
          <WithSeeMore story={story} action={action}>
            <div
              style={{
                background: "#FFFFFF",
                //paddingler burada
                height: "100%",
                marginTop: "0px",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  width: "447px",
                  height: "600px",
                  marginTop: "0px",
                }}
                alt=""
                src={props.arr}
              ></img>
            </div>
          </WithSeeMore>
          
        );
      },

      seeMoreCollapsed: ({ toggleMore, action }) => (
        
        <p
          onClick={() => toggleMore(true)}
          style={{ paddingBottom: "0px", paddingLeft: "130px" }}
        >
          <div className="back5">
            <IconButton
              aria-label="delete"
              size="small"
              color = "inherit"
              onClick={handleOnClickBack}
            >
              <ArrowBackIcon fontSize="medium" />
            </IconButton>
          </div>
          <div>
          <Button
            color="danger"
            style={{ borderRadius: "30px", width: "200px" }}
            tag={RouterNavLink}
            to={`/strdetay/${props.cmpId}`}
            onClick={updateUserInfo}
          >
            Detaylı Bilgi
          </Button>
          </div>
        </p>
        
      ),

      seeMore:
        ({ close }) =>
        ({ toggleMore, action }) =>
          <p onClick={() => toggleMore(true)}></p>,
      duration: 5000,
    },
  ];
  return (
    <div className="story" data-testid="detay">
      <Stories
        stories={obja}
        defaultInterval={1500}
        width={444}
        height={600}
        storyStyles={storyContent}
        onAllStoriesEnd={handleOnChangeFinish}
      />
    </div>
  );
};
export default StoryPage;
