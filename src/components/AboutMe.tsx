import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {/* Write 1-2 sentences about yourself */}I am a skilled mobile
            application developer with around 4 years of experience in Flutter
            development. Over the years, I have successfully built and managed a
            variety of applications, including e-commerce platforms, wildlife
            reporting systems, and short video-sharing apps. Currently, I am
            exploring mobile native development and expanding my skills in
            Node.js to diversify my technical expertise and work on backend
            solutions.
          </p>
        </CardContent>
      </Card>
    );
}