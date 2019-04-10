import React from 'react';
import HeaderChip from "./HeaderChip";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AdsSettingsItem from './AdsSettingsItem';

const AdsSettings = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='تنظیمات تبلیغات' color='#512da8' icon='collections'/>
        <Divider/>
        <br/>
        <AdsSettingsItem icon="filter_1" label="تصویر تبلیغاتی جایگاه اول" to="/country-setting"/>
        <AdsSettingsItem icon="filter_2" label="تصویر تبلیغاتی جایگاه دوم" to="/province-setting"/>
        <AdsSettingsItem icon="filter_3" label="تصویر تبلیغاتی جایگاه سوم" to="/city-setting"/>
        <AdsSettingsItem icon="filter_4" label="تصویر تبلیغاتی جایگاه چهارم" to="/airport-setting"/>
        <AdsSettingsItem icon="filter_5" label="تصویر تبلیغاتی جایگاه پنجم" to="/terminal-setting"/>
    </Paper>
);

export default AdsSettings;