import React from 'react';
import s from  "./ProfileInfo.module.css";

function ProfileInfo(props) {
	return (
		<div>
			<div >
				<img className={s.image} src='https://pulson.ru/wp-content/uploads/2012/01/wallpaper-603460.jpg' />
			</div>
			<div>
				ava + description
			</div>
		</div>
	);
}


export default ProfileInfo;