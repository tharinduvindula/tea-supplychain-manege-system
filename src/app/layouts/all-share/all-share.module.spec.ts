import { AllShareModule } from './all-share.module';

describe('AllShareModule', () => {
    let allShareModule: AllShareModule;

    beforeEach(() => {
        allShareModule = new AllShareModule();
    });

    it('should create an instance', () => {
        expect(allShareModule).toBeTruthy();
    });
});
