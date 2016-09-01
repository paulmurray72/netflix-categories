/**
 * Created by Deekshith Allamaneni on 11/23/15.
 * Copyright 2016 Deekshith Allamaneni
 */

"use strict";

function UserConfig (userPreferencesJSON) {
    this.userPreferencesJSON_ = userPreferencesJSON;
}

UserConfig.prototype.getUserPrefVersion = function() {
    return this.userPreferencesJSON_.user_preferences.version;
};

UserConfig.prototype.isExtensionEnabled = function() {
    return this.userPreferencesJSON_.user_preferences.extension_enable;
};

UserConfig.prototype.setExtensionEnable = function (userInput) {
    if(typeof(userInput) !== "boolean") {console.log("Invalid input params"); return false;}
    this.userPreferencesJSON_.user_preferences.extension_enable = userInput;
    return true;
};

UserConfig.prototype.getSearchEngineCategories = function () {
    let searchEngineCategories = this.userPreferencesJSON_.search_engines
        .map(eachSearchEngine => eachSearchEngine.category);
    return Array.from(new Set(searchEngineCategories));
};

UserConfig.prototype.getSearchEnginesByCategory = function (searchEngineCategory) {
    return this.userPreferencesJSON_.search_engines
        .filter(eachSearchEngine => eachSearchEngine.category === searchEngineCategory);
};

UserConfig.prototype.getPrivacyCollectStatsStatus = function () {
    return this.userPreferencesJSON_.user_preferences.privacy.collect_stats;
};
UserConfig.prototype.setPrivacyCollectStatsStatus = function (userInput) {
    if(typeof(userInput) !== "boolean") {console.log("Invalid input params"); return false;}
    this.userPreferencesJSON_.user_preferences.privacy.collect_stats = userInput;
};
UserConfig.prototype.getPreferences = function () {
    return this.userPreferencesJSON_;
};
