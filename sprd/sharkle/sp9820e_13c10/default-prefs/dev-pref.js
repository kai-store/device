// This is a temporary solution for apps to fit QVGA because
// apps can't be modified for QVGA before first release to SoC vendor.

// This enable FM service to hold wakelock when FM is playing.
pref("device.fm.requirewakelock", false);

// Retain only one process' layers buffers for low memory device.
pref("layers.compositor-lru-size", 1);

// LMK minfree settings for the cases of background, background perceivable, and foreground
pref("hal.processPriorityManager.gonk.FOREGROUND.KillUnderKB", 20480);
pref("hal.processPriorityManager.gonk.BACKGROUND_PERCEIVABLE.KillUnderKB", 40960);
pref("hal.processPriorityManager.gonk.BACKGROUND.KillUnderKB", 65536);
// Bar-type phone devices without physical endcall key and volume key.
pref("device.capability.flip", false);
pref("device.capability.endcall-key", false);
pref("device.capability.volume-key", false);

// Notify trigger threshold
pref("gonk.notifyHardLowMemUnderKB", 30720);

pref("mmi.string.mmi_test", "*#2886#");
pref("mmi.string.log_catch", "*#573564#");
pref("mmi.string.log_catch2", "*#*#0574#*#*");
pref("mmi.string.test_box", "*#8378269#");
pref("mmi.string.test_box2", "*#*#2637643#*#*");
pref("dom.fmradio.antenna.internal", true);
