//
//  EchoPlugin.m
//  App
//
//  Created by Elliott Davies on 16/03/2023.
//

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(EchoPlugin, "Echo",
    CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
