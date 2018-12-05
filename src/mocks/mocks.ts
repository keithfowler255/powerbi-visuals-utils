/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.utils.test.mocks {
    // powerbi
    import IColorInfo = powerbi.IColorInfo;

    // powerbi.visuals
    import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
    import ISelectionId = powerbi.visuals.ISelectionId;

    // powerbi.extensibility
    import IColorPalette = powerbi.extensibility.IColorPalette;
    import ISelectionManager = powerbi.extensibility.ISelectionManager;
    import ILocalizationManager = powerbi.extensibility.ILocalizationManager;
    import ITelemetryService = powerbi.extensibility.ITelemetryService;
    import IAuthenticationService = powerbi.extensibility.IAuthenticationService;
    import IVisualHost = powerbi.extensibility.visual.IVisualHost;

    // powerbi.extensibility.utils.test.mocks
    import MockVisualHost = powerbi.extensibility.utils.test.mocks.MockIVisualHost;
    import MockIColorPalette = powerbi.extensibility.utils.test.mocks.MockIColorPalette;
    import MockISelectionId = powerbi.extensibility.utils.test.mocks.MockISelectionId;
    import MockISelectionIdBuilder = powerbi.extensibility.utils.test.mocks.MockISelectionIdBuilder;
    import MockISelectionManager = powerbi.extensibility.utils.test.mocks.MockISelectionManager;
    import MockITooltipService = powerbi.extensibility.utils.test.mocks.MockITooltipService;
    import MockILocale = powerbi.extensibility.utils.test.mocks.MockILocale;
    import MockIAllowInteractions = powerbi.extensibility.utils.test.mocks.MockIAllowInteractions;
    import MockILocalizationManager = powerbi.extensibility.utils.test.mocks.MockILocalizationManager;
    import MockITelemetryService = powerbi.extensibility.utils.test.mocks.MockITelemetryService;
    import MockIAuthenticationService = powerbi.extensibility.utils.test.mocks.MockIAuthenticationService;
    import MockIStorageService = powerbi.extensibility.utils.test.mocks.MockIStorageService;

    import ILocalVisualStorageService = powerbi.extensibility.utils.test.mocks.ILocalVisualStorageService;

    export function createVisualHost(locale?: Object, allowInteractions?: boolean, colors?: IColorInfo[], isEnabled?: boolean, displayNames?: any, token?: string): IVisualHost {
        return new MockVisualHost(
            createColorPalette(colors),
            createSelectionManager(),
            createTooltipService(isEnabled),
            createLocale(locale),
            createAllowInteractions(allowInteractions),
            createLocalizationManager(displayNames),
            createTelemetryService(),
            createAuthenticationService(token),
            createStorageService());
    }

    export function createColorPalette(colors?: IColorInfo[]): IColorPalette {
        return new MockIColorPalette(colors);
    }

    export function createSelectionId(key: string = ""): ISelectionId {
        return new MockISelectionId(key);
    }

    export function createSelectionIdBuilder(): ISelectionIdBuilder {
        return new MockISelectionIdBuilder();
    }

    export function createSelectionManager(): ISelectionManager {
        return new MockISelectionManager();
    }

    export function createTooltipService(isEnabled?: boolean): ITooltipService {
        return new MockITooltipService(isEnabled);
    }

    export function createLocale(locales?: Object): MockILocale {
        return new MockILocale(locales);
    }

    export function createAllowInteractions(isEnabled?: boolean): MockIAllowInteractions {
        return new MockIAllowInteractions(isEnabled);
    }

    export function createLocalizationManager(displayNames?: any): ILocalizationManager {
        return new MockILocalizationManager(displayNames);
    }

    export function createTelemetryService(): ITelemetryService {
        return new MockITelemetryService();
    }

    export function createAuthenticationService(token?: string): IAuthenticationService {
        return new MockIAuthenticationService(token);
    }

    export function  createStorageService(): ILocalVisualStorageService {
        return new MockIStorageService();
    }
}
